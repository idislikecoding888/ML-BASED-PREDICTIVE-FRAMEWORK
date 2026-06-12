"use client"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import SCLRadarChart from "@/components/SCLRadarChart"
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

  const dimensions = [
    ["SOM", "Somatization"],
    ["OC", "Obsessive-Compulsive"],
    ["IS", "Interpersonal Sensitivity"],
    ["DEP", "Depression"],
    ["ANX", "Anxiety"],
    ["HOS", "Hostility"],
    ["PHOB", "Phobic Anxiety"],
    ["PAR", "Paranoid Ideation"],
    ["PSY", "Psychoticism"]
  ]

  const getSeverity = (score: number) => {
    if (score >= 75) return "Severe"
    if (score >= 65) return "Clinically Significant"
    if (score >= 55) return "Mild Elevation"
    return "Within Normal Range"
  }

  const getSeverityColor = (score: number) => {
    if (score >= 75)
      return "bg-red-100 text-red-700"

    if (score >= 65)
      return "bg-orange-100 text-orange-700"

    if (score >= 55)
      return "bg-yellow-100 text-yellow-700"

    return "bg-green-100 text-green-700"
  }

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Assessment Result
      </h1>

      {/* Recommendation */}

      <div className="bg-white border rounded-xl p-6 shadow-sm">

        <div className="flex items-center justify-between mb-3">

          <h2 className="font-semibold text-lg">
            Recommended Intervention
          </h2>

          <span className="px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700">
            {riskLevel}
          </span>

        </div>

        <p className="text-indigo-600 font-medium text-lg">
          {result.prediction}
        </p>

      </div>

      {/* AI Report */}

	<div className="bg-white border rounded-xl p-6 shadow-sm">

  		<h2 className="font-semibold text-lg mb-4">
    			Psychological Assessment Report
  		</h2>

  		<div className="prose prose-lg max-w-none">
    			<ReactMarkdown remarkPlugins={[remarkGfm]}>
      				{result.explanation}
    			</ReactMarkdown>
  		</div>

	</div>

	<div className="bg-white border rounded-xl p-6 shadow-sm">

  		<h2 className="font-semibold text-lg mb-4">
    			Dimensional Profile
  		</h2>

  		<SCLRadarChart
    			scores={result.t_scores}
  		/>

	</div>
{/* Complete Scores */}

      <div className="bg-white border rounded-xl p-6 shadow-sm">

        <h2 className="font-semibold text-lg mb-4">
          Complete SCL-90 Score Profile
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          {dimensions.map(([code, name]) => {

            const tscore = result?.t_scores?.[code]
            const avg = result?.dimension_averages?.[code]

            return (

              <div
                key={code}
                className="border rounded-lg p-4 hover:shadow-md transition"
              >

                <div className="flex justify-between items-start">

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {name}
                    </h3>

                    <p className="text-xs text-gray-500">
                      {code}
                    </p>
                  </div>

                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(tscore)}`}
                  >
                    {getSeverity(tscore)}
                  </span>

                </div>

                <div className="mt-4 space-y-2">

                  <p>
                    <span className="font-medium">
                      T-Score:
                    </span>{" "}
                    {tscore}
                  </p>

                  <p>
                    <span className="font-medium">
                      Raw Average:
                    </span>{" "}
                    {avg?.toFixed(2)}
                  </p>

                </div>

              </div>

            )

          })}

        </div>

      </div>

      {/* Navigation */}

      <div className="flex gap-4">

        <Link
          href="/assessment"
          className="inline-block px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition"
        >
          Retake Assessment
        </Link>

        <Link
          href="/"
          className="inline-block px-5 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-50 transition"
        >
          Home
        </Link>

      </div>

    </div>
  )
}