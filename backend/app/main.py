from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import chatbot

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to the origin of your frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chatbot.router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Welcome to the GRT Chatbot API"}
