from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from utils.scoring import compute_dimension_averages
from utils.scoring import compute_t_scores

from services.prediction import predict_intervention
from services.llm_service import generate_summary

from pydantic import BaseModel
import sqlite3

from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class SurveyRequest(BaseModel):
    answers: list[int]


@app.get("/")
def root():

    return {"message": "SCL-90 therapy prediction API running"}

class User(BaseModel):
    name: str | None = None
    phone: str | None = None
    anonymous: bool = False


@app.post("/user")
def save_user(user: User):

    conn = sqlite3.connect("users.db")
    cur = conn.cursor()

    cur.execute("""
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY,
        name TEXT,
        phone TEXT,
        anonymous BOOLEAN
    )
    """)

    cur.execute(
        "INSERT INTO users(name, phone, anonymous) VALUES (?, ?, ?)",
        (user.name, user.phone, user.anonymous)
    )

    conn.commit()
    conn.close()

    return {"status": "saved"}

@app.post("/predict")
def predict(data: SurveyRequest):

    answers = data.answers

    if len(answers) != 90:
        return {
            "error": f"Expected 90 answers, received {len(answers)}"
        }

    #if len(answers) != 90:
    if len(answers) < 1:

        return {"error": "Exactly 90 answers required"}


    averages = compute_dimension_averages(answers)

    tscores = compute_t_scores(averages)


    anx_t = tscores["ANX"]
    dep_t = tscores["DEP"]
    psy_t = tscores["PSY"]


    prediction = predict_intervention(tscores)

    try:
        explanation = generate_summary(prediction, tscores)
    except Exception:
        explanation = "AI explanation is unavailable, our API Key limit must have reached, please wait for 24 hours. Sorry for the inconvenience caused."


    return {
    "prediction": prediction,
    "explanation": explanation,
    "t_scores": tscores,
    "dimension_averages": averages
}
