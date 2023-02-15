from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

llm = OpenAI(temperature=0.9)

prompt = PromptTemplate(
    input_variables=["topic"],
    template="What is a good name for an AI startup focusing on {topic}?",
)

chain = LLMChain(llm=llm, prompt=prompt)

response = chain.run("building the next generation data centric ML development environment.")

print(response)