from groq import Groq
import os
from dotenv import load_dotenv

# load environment variables
load_dotenv()

# initialize groq client
client = Groq(api_key=os.getenv("GROQ_API_KEY"))


def generate_summary(prediction):
    """
    Generates a short explanation for the predicted intervention
    using Groq's compound reasoning model.
    """

    prompt = f"""
You are explaining the result of a mental health screening tool.

Prediction: {prediction}

Write a short explanation for the user.

Important rules:
- This is NOT a diagnosis.
- Do NOT replace a therapist.
- Encourage professional consultation if necessary.
- Keep the explanation supportive and neutral.
- Limit to 3-4 sentences.
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