import joblib
import numpy as np
import os


BASE_DIR = os.path.dirname(os.path.dirname(__file__))

model_path = os.path.join(BASE_DIR, "model", "rf_model.pkl")

model = joblib.load(model_path)

if not os.path.exists(model_path):
    raise FileNotFoundError(f"Model file not found at {model_path}")

def predict_intervention(tscores):

    features = np.array([[
        tscores["SOM"],
        tscores["OC"],
        tscores["IS"],
        tscores["DEP"],
        tscores["ANX"],
        tscores["HOS"],
        tscores["PHOB"],
        tscores["PAR"]
]])

    prediction = model.predict(features)[0]

    if prediction == 1:
        return "Needs Therapy"
    else:
        return "You should be okay!"