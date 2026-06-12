from groq import Groq
import os
from dotenv import load_dotenv

load_dotenv()

# initialize Groq client
client = Groq(api_key=os.getenv("GROQ_API_KEY"))


def generate_summary(prediction, tscores):
    prompt = f"""
You are an expert clinical psychologist and psychometric assessment specialist.

SCL-90 T-SCORES:

{tscores}

MODEL PREDICTION:

{prediction}

Generate a detailed psychological assessment report based strictly on the provided T-scores.

Interpret T-scores using:

* Below 55: Within normal range
* 55-64: Mild elevation
* 65-74: Clinically significant elevation
* 75 and above: Severe elevation

Requirements:

1. Explain the overall psychological profile.
2. Identify the most elevated symptom dimensions.
3. Explain what each elevated dimension may indicate psychologically.
4. Discuss possible interactions between elevated dimensions.
5. Explain potential impact on:

   * Emotional well-being
   * Academic or work performance
   * Social relationships
   * Daily functioning
6. Discuss the significance of the machine learning prediction.
7. Mention dimensions that appear relatively normal.
8. Use professional psychological language.
9. Do not provide emotional reassurance.
10. Do not claim a definitive clinical diagnosis.
11. Base all conclusions only on the provided scores.

Structure the report as:

# Executive Summary

# Key Elevated Dimensions

# Psychological Interpretation

# Functional Impact

# Risk Assessment

# Overall Conclusion

The report should be analytical, detailed, and approximately 400-800 words.

Do not use markdown tables.

Use section headings and bullet points only.
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
