"use client"

import { useEffect, useState } from "react"

const stages = [
  "Initializing psychological scoring engine...",
  "Aggregating response vectors...",
  "Normalizing values against T-score tables...",
  "Mapping SCL-90 symptom dimensions...",
  "Running machine learning inference...",
  "Evaluating psychological indicators...",
  "Generating interpretive insights...",
  "Finalizing analysis..."
]

export default function AIProcessingScreen() {

  const [stage, setStage] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % stages.length)
    }, 2000)

    return () => clearInterval(interval)

  }, [])

  return (

    <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-12 text-center animate-fadeIn">


      {/* AI Visualization */}

      <div className="relative flex items-center justify-center">

        {/* Brain */}
        <div className="text-8xl animate-brainPulse">
          🧠
        </div>

        {/* ML Gear */}
        <div className="absolute -right-14 text-4xl animate-spinSlow">
          ⚙️
        </div>

        {/* Data Node */}
        <div className="absolute -left-14 text-4xl animate-nodePulse">
          🔵
        </div>

        {/* Data Bars */}
        <div className="absolute -bottom-10 text-3xl animate-dataFlow">
          📊
        </div>

      </div>


      {/* Title */}

      <div className="space-y-2">

        <h2 className="text-2xl font-semibold text-text-primary">
          AI Analysis in Progress
        </h2>

        <p className="text-text-secondary max-w-md">
          Your responses are being analyzed using psychological scoring
          and machine learning models.
        </p>

      </div>


      {/* Stage Message */}

      <div className="bg-surface border border-border rounded-xl px-6 py-4 shadow-soft">

        <p className="text-text-secondary font-medium animate-pulse">
          {stages[stage]}
        </p>

      </div>


      {/* Neural Network Animation */}

      <div className="flex gap-6 items-center">

        <div className="w-3 h-3 bg-brand rounded-full animate-nodePulse"></div>
        <div className="w-12 h-[2px] bg-border animate-dataFlow"></div>
        <div className="w-3 h-3 bg-brand rounded-full animate-nodePulse delay-200"></div>
        <div className="w-12 h-[2px] bg-border animate-dataFlow delay-300"></div>
        <div className="w-3 h-3 bg-brand rounded-full animate-nodePulse delay-500"></div>

      </div>


      {/* Progress Bar */}

      <div className="w-72 h-2 bg-border rounded-full overflow-hidden">

        <div className="h-full bg-brand animate-loadingBar"></div>

      </div>

    </div>
  )
}