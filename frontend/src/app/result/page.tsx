"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function ResultPage() {

  const [result, setResult] = useState<any>(null)

  useEffect(() => {
    const stored = localStorage.getItem("result")
    if (stored) {
      setResult(JSON.parse(stored))
    }
  }, [])

  if (!result) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading assessment results...
      </div>
    )
  }

  const riskLevel =
    result?.t_scores?.ANX > 65
      ? "High Risk"
      : result?.t_scores?.ANX > 55
      ? "Moderate Risk"
      : "Low Risk"

  return (

    <div className="space-y-6">

      <h1 className="text-2xl font-bold">
        Assessment Result
      </h1>


      <div className="bg-white border rounded-xl p-6 shadow-sm">

        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-lg">
            Recommended Intervention
          </h2>

          <span className="px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700">
            {riskLevel}
          </span>
        </div>

        <p className="text-indigo-600 font-medium">
          {result.prediction}
        </p>

      </div>


      <div className="bg-white border rounded-xl p-6 shadow-sm">

        <h2 className="font-semibold text-lg mb-2">
          AI Explanation
        </h2>

        <p className="text-gray-600">
          {result.explanation}
        </p>

      </div>


      <div className="bg-white border rounded-xl p-6 shadow-sm">

        <h2 className="font-semibold text-lg mb-4">
          Key Symptom Scores
        </h2>

        <div className="space-y-2 text-gray-700">

          <p>Anxiety (ANX): {result?.t_scores?.ANX}</p>
          <p>Depression (DEP): {result?.t_scores?.DEP}</p>
          <p>Psychoticism (PSY): {result?.t_scores?.PSY}</p>

        </div>

        <div className="pt-4">
          <Link
            href="/assessment"
            className="inline-block px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition"
          >
            Retake Assessment
          </Link>
        </div>

        {/* <div className="pt-4">
          <Link
            href="/"
            className="inline-block px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition"
          >
            Home
          </Link>
        </div> */}

      </div>

    </div>

  )
}