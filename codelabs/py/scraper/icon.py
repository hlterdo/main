import os
import requests
from bs4 import BeautifulSoup

url = 'https://www.wandb.com'  # replace with the URL of the website

# Fetch the HTML content of the website
response = requests.get(url)
html_content = response.text

# Parse the HTML to find the link to the icon
soup = BeautifulSoup(html_content, 'html.parser')
icon_link = soup.find('link', rel='icon') or soup.find('link', rel='shortcut icon')

if icon_link:
    # Download the icon and save it to a file
    icon_url = icon_link.get('href')
    icon_response = requests.get(icon_url)
    with open('icon.ico', 'wb') as f:
        f.write(icon_response.content)
        print('Icon saved to icon.ico')
else:
    print('No icon found on the website')
