from numpy.linalg import norm
from numpy import dot
import openai
import os
import json
from inde_email import IndeEmail
from typing import List
from datetime import datetime

CHATGPT_DOESNT_KNOW = "I don't know"
_EMBEDDINGS_CACHE_FILE = "cache/embeddings.json"
_EMBEDDINGS_CACHE = {}


def embedding_similarity(query_embed, doc_embed):
    similarity = dot(query_embed, doc_embed) / \
        (norm(query_embed) * norm(doc_embed))
    return similarity


def get_openai_embedding(text):
    if not _EMBEDDINGS_CACHE:
        if os.path.exists(_EMBEDDINGS_CACHE_FILE):
            with open(_EMBEDDINGS_CACHE_FILE, "r") as f:
                cache_file_data = json.load(f)
                for item in cache_file_data:
                    _EMBEDDINGS_CACHE[item["text"]] = item["embedding"]
        else:
            if not os.path.exists(os.path.dirname(_EMBEDDINGS_CACHE_FILE)):
                os.makedirs(os.path.dirname(_EMBEDDINGS_CACHE_FILE))
            with open(_EMBEDDINGS_CACHE_FILE, "w") as f:
                pass

    if _EMBEDDINGS_CACHE.get(text) is not None:
        return _EMBEDDINGS_CACHE[text]

    embedding = openai.Embedding.create(
        input=[text], model="text-embedding-ada-002")['data'][0]['embedding']

    _EMBEDDINGS_CACHE[text] = embedding

    json_data = [{"text": key, "embedding": value}
                 for key, value in _EMBEDDINGS_CACHE.items()]

    with open(_EMBEDDINGS_CACHE_FILE, "w") as f:
        json.dump(json_data, f)

    return embedding


def call_chatgpt_per_email(email_body: str, question: str) -> str:
    main_prompt = f"Context:\n{email_body}\nquestion: {question}\nYour reply must either be \"I don't know\" or the actual answer of the question. If your reply is \"I don't know\" do not include any other text, just reply with \"I don't know\"Do not start your reply with phrases like \"Based on the information provided\" or \"Based on the context provided\", just reply with an answer."
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant who answers questions based on the given context. Answer the question as truthfully as possible using the provided context, and if the answer is not contained within the text below, say I don't know."},
            {"role": "user", "content": f"{main_prompt}"},
        ]
    )

    answer = response["choices"][0]["message"]["content"]

    if CHATGPT_DOESNT_KNOW.lower() in answer.lower() or "there is no mention".lower() in answer.lower() or "there is no information".lower() in answer.lower():
        return CHATGPT_DOESNT_KNOW

    return answer


def call_chatgpt_for_multiple_answers(emails: List[IndeEmail], answers: List[str], question: str):
    assert len(emails) == len(
        answers), "Length of the emails and replies must be same"

    today = datetime.now()

    system_prompt = """
Your job is to consolidate multiple answers from different emails into a clear response.
Use references to which emails you are talking about and their dates.
Your response should be a clear response within any "Thank you" phrases or
"based on the context" phrases. Just provide a clear answer to the question with references.
You should put your references next to the sentences rather than at the end.
"""

    main_prompt = f"Todays date and time is {today}. Our client asked the following question: \"{question}\"\n\n"

    main_prompt = "Here are the emails and answers we found in them for you to consolidate a single answer for:\n\n"

    for i in range(len(emails)):
        email = emails[i]
        answer = answers[i]

        email_prompt = f"Based on the email titled {email.get_subject()} sent on {email.get_date()}: {answer}\n\n"

        main_prompt += email_prompt

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": f"{system_prompt}"},
            {"role": "user", "content": f"{main_prompt}"},
        ]
    )

    answer = response["choices"][0]["message"]["content"]

    return answer
