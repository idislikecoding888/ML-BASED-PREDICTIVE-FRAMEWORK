from groq import Groq
import os
from dotenv import load_dotenv

load_dotenv()

# initialize Groq client
client = Groq(api_key=os.getenv("GROQ_API_KEY"))


def generate_summary(prediction):
    prompt = f"""
You are explaining the results of a psychological screening tool based on the SCL-90 symptom dimensions.

User scores were analyzed across the following dimensions:
- Somatization
- Obsessive-Compulsive tendencies
- Interpersonal Sensitivity
- Depression
- Anxiety
- Hostility
- Phobic Anxiety
- Paranoid Ideation
- Psychoticism

The system predicted the most relevant support approach: {prediction}

Your job:
Explain the results in a way that makes the user feel understood and supported.

Guidelines:
- Speak in a warm, human tone.
- Briefly acknowledge that many people experience these feelings during stress, life changes, academic pressure, relationships, or uncertainty.
- Mention that elevated scores in these areas can reflect emotional strain, overthinking, low mood, or anxiety that many individuals go through.
- Help the user understand that their responses suggest certain emotional patterns, but they are not alone in feeling this way.
- Encourage reflection and self-care.
- Suggest that talking to a mental health professional may be helpful if these feelings persist.

Important rules:
- This is NOT a diagnosis.
- Do NOT act as a therapist.
- Avoid medical claims.
- Write 4–6 sentences maximum.
- Make the user feel heard and supported.
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