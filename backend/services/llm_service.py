from groq import Groq
import os
from dotenv import load_dotenv

load_dotenv()

# initialize Groq client
client = Groq(api_key=os.getenv("GROQ_API_KEY"))


def generate_summary(prediction, tscores):
    prompt = f"""
You are a clinical mental health assistant.

Given the following SCL-90 T-scores:

{tscores}

Prediction: {prediction}

Your task:
- Analyze the scores dimension-wise
- Highlight ONLY the significantly elevated dimensions (>65)
- Explain what these elevated scores indicate in simple psychological terms
- Be specific and analytical, NOT generic or overly comforting
- Avoid cliché phrases like "you're not alone" or "it's normal"
- Keep the explanation concise and professional (4–5 sentences max)
- This is a diagnosis, keep it clear.
- If multiple dimensions are high, explain how they may interact.

Focus on insights, not emotional reassurance.
"""

    completion = client.chat.completions.create(
        model="groq/compound",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return completion.choices[0].message.content
