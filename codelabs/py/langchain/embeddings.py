from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain.vectorstores import Chroma
from langchain.embeddings.openai import OpenAIEmbeddings
from numpy import dot
from numpy.linalg import norm

query = "We are building a collaborative text editor and would like to use AI to innovate."

docs = [
  "It takes 5 minutes to trial. Join the 1000's of real estate agents using generative AI to instantly create unique, localised property descriptions, that are 100% fit for purpose. Start Today http://overwrite.ai",
  "Generative AI for Real Estate",
  "Augmented Reality and Generative AI Could Transform Future of Real Estate Marketing",
  "Notion AI — \"your ultra-capable teammate\" — is now publicly available. High-quality implementation of OpenAI for every aspect of creating & editing a document."
]

embeddings = OpenAIEmbeddings(openai_api_key="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")

query_embed = embeddings.embed_query(query)

doc_embeds = embeddings.embed_documents(docs)

print(len(doc_embeds))

print(type(doc_embeds[0]))

print(len(doc_embeds[0]))

for i in range(len(doc_embeds)):
  doc_embed = doc_embeds[i]
  similarity = dot(query_embed, doc_embed) / (norm(query_embed) * norm(doc_embed))

  print(f"{i}: {similarity}")


