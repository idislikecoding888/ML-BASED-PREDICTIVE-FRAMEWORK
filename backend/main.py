from fastapi import FastAPI
from pydantic import BaseModel

from utils.scoring import compute_dimension_averages
from utils.scoring import compute_t_scores

from services.prediction import predict_intervention
from services.llm_service import generate_summary
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()


class SurveyRequest(BaseModel):

    answers: list


@app.get("/")
def root():

    return {"message": "SCL-90 therapy prediction API running"}



@app.post("/predict")
def predict(data: SurveyRequest):

    answers = data.answers

    if len(answers) != 90:

        return {"error": "Exactly 90 answers required"}


    averages = compute_dimension_averages(answers)

    tscores = compute_t_scores(averages)


    anx_t = tscores["ANX"]
    dep_t = tscores["DEP"]
    psy_t = tscores["PSY"]


    prediction = predict_intervention(tscores)

    explanation = generate_summary(prediction)


    return {

        "result": prediction,

        "summary": explanation,

        "t_scores": tscores,

        "averages": averages

    }