CheckMyMind — ML Based Predictive Framework for Therapy Needs using SCL-90

CheckMyMind is a mental health screening web application that uses the SCL-90 psychological assessment framework combined with machine learning to provide early insight into potential mental health concerns.

The system allows users to answer a structured questionnaire and receive an AI-generated explanation and intervention suggestion based on their responses.

⚠️ This system is not a medical diagnosis tool. It is intended for screening and awareness purposes only.

Features

• SCL-90 based psychological screening
• ML-based prediction of mental health risk
• AI explanation for results
• Clean, modern questionnaire UI
• Keyboard shortcuts for faster answering
• Anonymous or identified test option
• Result summary with key symptom scores

Tech Stack

Frontend

Next.js
React
TypeScript
TailwindCSS
Framer Motion
Axios

Backend

FastAPI
Python
Scikit-learn
Joblib
Uvicorn

ML Model

Random Forest Classifier
Project Structure
TherapyNeeds
│
├── backend
│   ├── main.py
│   ├── requirements.txt
│   ├── model
│   │   └── rf_model.pkl
│   ├── services
│   ├── utils
│   ├── data
│   └── users.db
│
├── frontend
│   ├── package.json
│   ├── src
│   ├── public
│   └── next.config.ts
│
└── README.md
Prerequisites

Make sure the following are installed on your system:

Python 3.9+
Node.js 18+
npm
Git

Check versions:

python --version
node --version
npm --version
Clone the Repository
git clone https://github.com/YOUR_USERNAME/TherapyNeeds.git
cd TherapyNeeds
Backend Setup (FastAPI)
Navigate to backend folder
cd backend
Create a virtual environment

Windows

python -m venv venv
venv\Scripts\activate

Mac/Linux

python3 -m venv venv
source venv/bin/activate
Install dependencies
pip install -r requirements.txt

Typical packages installed:

fastapi
uvicorn
scikit-learn
pandas
numpy
joblib
pydantic
Run backend server
uvicorn main:app --reload

Backend will start at:

http://127.0.0.1:8000

API documentation:

http://127.0.0.1:8000/docs
Frontend Setup (Next.js)

Open a new terminal.

Navigate to frontend folder
cd frontend
Install dependencies
npm install

Main packages installed:

next
react
typescript
tailwindcss
axios
framer-motion
Start frontend
npm run dev

Frontend will run at:

http://localhost:3000
Running the Full Project Locally

Run backend first:

cd backend
venv\Scripts\activate
uvicorn main:app --reload

Then run frontend:

cd frontend
npm run dev

Open:

http://localhost:3000
Application Flow
Home Page
↓
User Details / Anonymous Option
↓
Assessment Rules
↓
SCL-90 Questionnaire (90 questions)
↓
ML Prediction
↓
Result Dashboard
ML Model

The model used is a Random Forest classifier trained on psychological response data.

Model file location:

backend/model/rf_model.pkl

The backend loads the model using:

joblib.load()

Input features are generated from questionnaire responses and dimension scoring.

Keyboard Shortcuts

Users can answer faster using:

1 → Not at all
2 → A little
3 → Moderately
4 → Quite a bit
5 → Extremely
Important Disclaimer

This project is intended for educational and screening purposes only.

It does not replace professional psychological diagnosis or treatment.

Users experiencing distress should consult a licensed mental health professional.

Deployment

Recommended deployment platforms:

Frontend

Vercel

Backend

Render
Author

Preyan Khasnobis
BTech CSE

Project: CheckMyMind

License

This project is released under the MIT License.