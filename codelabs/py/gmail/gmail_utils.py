import base64
from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials
from typing import List
from inde_email import IndeEmail
from datetime import datetime
import re
import logging

_NUM_CLEAN_BODY_CHAR_LIMIT = 16_000

logging.basicConfig()
LOG = logging.getLogger("gmail_utils")
LOG.setLevel(logging.INFO)


def _email_subject(email):
    subject = ''

    headers = email['payload']['headers']
    for header in headers:
        if header['name'] == 'Subject':
            subject = header['value']

    return subject


def get_email_date(email):
    # Get the date of the email
    headers = email['payload']['headers']
    for header in headers:
        if header['name'] == 'Date':
            date_str = header['value']
            # get rid of the "tue, " in the beginning
            date_str = date_str[5:]
            # get rid of things like (PST) at the end
            date_str = date_str.split(' (')[0]
            date = datetime.strptime(date_str, '%d %b %Y %H:%M:%S %z')
            return date


def extract_raw_body(email):
    raw_body = ''
    if 'parts' in email['payload']:
        parts = email['payload']['parts']
        for part in parts:
            if part['mimeType'] == 'text/plain':
                raw_body = part['body']['data']
                break
            else:
                raw_body = email['payload']['body']['data']

    return base64.urlsafe_b64decode(raw_body).decode()


def clean_body(raw_body):
    # Replace all new lines, returns, etc. with a space
    raw_body = re.sub(r'\s+', ' ', raw_body)

    # Clean up all non-letters and non-numbers
    raw_body = re.sub(r'[^a-zA-Z0-9 ]', '', raw_body)

    # Convert all letters to lowercase
    raw_body = raw_body.lower()

    # Replace all multiple spaces with a single space
    raw_body = re.sub(r' +', ' ', raw_body)

    raw_body = raw_body.strip()

    words = raw_body.split()

    filter_conditions = [r'(?!http)\w+']

    filtered_words = [word for word in words if all(
        re.match(regex, word) for regex in filter_conditions)]

    # Return the cleaned text
    return ' '.join(filtered_words)


def fetch_emails(tokens_file_path: str, num_emails_to_read: int, email_filter: str) -> List[IndeEmail]:
    creds = Credentials.from_authorized_user_file(
        tokens_file_path, ['https://www.googleapis.com/auth/gmail.readonly'])
    service = build('gmail', 'v1', credentials=creds)

    email_metadatas = service.users().messages().list(userId='me', maxResults=num_emails_to_read,
                                                      q=email_filter).execute().get('messages')
    print(f"Found {len(email_metadatas)} emails")

    emails = []

    for i in range(len(email_metadatas)):
        email_metadata = email_metadatas[i]
        email_id = email_metadata['id']
        email = service.users().messages().get(
            userId='me', id=email_id).execute()
        email_subject = _email_subject(email)

        print(f"{i + 1}. {email_subject}")

        email_date = get_email_date(email)

        email_raw_body = ''
        try:
            email_raw_body = extract_raw_body(email)
        except Exception as e:
            LOG.error(
                f"-- Error fetching the email body for {email_subject}, skipping. ", str(e))
            continue

        email_clean_body = clean_body(email_raw_body)

        if len(email_clean_body) > _NUM_CLEAN_BODY_CHAR_LIMIT:
            LOG.warning(
                f"--> Skipping \"{email_subject}\" because it has {len(email_clean_body)} chars which is more than {_NUM_CLEAN_BODY_CHAR_LIMIT} ")
            continue

        emails.append(IndeEmail(email_id, email_subject, email_date,
                      email_raw_body, email_clean_body))

    return emails
