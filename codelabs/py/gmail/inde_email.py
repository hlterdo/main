from typing import Any
from typing import List

from datetime import datetime


class IndeEmail:
    def __init__(self, email_id: str, subject: str, date: datetime, raw_body: str, clean_body: str) -> None:
        self._email_id = email_id
        self._subject = subject
        self._date = date
        self._raw_body = raw_body
        self._clean_body = clean_body
        self._embedding = []

    def get_email_id(self) -> str:
        return self._email_id

    def get_subject(self) -> str:
        return self._subject

    def get_date(self) -> str:
        return self._date

    def get_raw_body(self) -> str:
        return self._raw_body

    def get_clean_body(self) -> str:
        return self._clean_body

    def get_num_clean_body_chars(self) -> int:
        return len(self._clean_body)

    def get_embedding(self) -> List[float]:
        return self._embedding

    def set_embedding(self, embedding: List[float]) -> None:
        self._embedding = embedding

    def to_dict(self) -> dict[str, Any]:
        return {
            'email_id': self._email_id,
            'subject': self._subject,
            'date': self._date.isoformat(),
            'num_clean_body_chars': self.get_num_clean_body_chars(),
            'clean_body': self._clean_body,
            'raw_body': self._raw_body,
            'embedding': self._embedding
        }
