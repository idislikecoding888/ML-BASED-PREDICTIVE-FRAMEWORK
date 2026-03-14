"use client"

import questions from "@/data/scl90.json"
import { useState } from "react"
import QuestionCard from "./QuestionCard"
import ProgressBar from "../ui/ProgressBar"
import { submitAnswers } from "@/lib/api"
import { useRouter } from "next/navigation"

const options = [
  { label: "Not at all", value: 0 },
  { label: "A little", value: 1 },
  { label: "Moderately", value: 2 },
  { label: "Quite a bit", value: 3 },
  { label: "Extremely", value: 4 }
]

export default function QuestionForm() {

  const router = useRouter()

  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<(string | number)[]>([])

  const handleSelect = async (value: number) => {

  const newAnswers = [...answers, value]
  setAnswers(newAnswers)

  if (current < questions.length - 1) {
    setCurrent(current + 1)
  } else {

    const result = await submitAnswers({
      answers: newAnswers
    })

    localStorage.setItem("result", JSON.stringify(result))

    router.push("/result")
  }
}

  const progress = (answers.length / questions.length) * 100

  return (

  <div className="space-y-6">

    {/* Progress Bar */}
    <div className="space-y-2">

      <div className="flex justify-between text-sm text-gray-500">
        <span>Progress</span>
        <span>{Math.round(progress)}%</span>
      </div>

      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

    </div>


    {/* Question Counter */}
    <p className="text-sm text-gray-500">
      Question {current + 1} of {questions.length}
    </p>


    {/* Question Card */}
    <QuestionCard
      question={questions[current].text}
      options={options}
      onSelect={handleSelect}
    />

  </div>

)
}