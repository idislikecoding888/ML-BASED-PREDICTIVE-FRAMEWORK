"use client"

import AIProcessingScreen from "@/components/ui/ProcessingScreen"
import { motion, AnimatePresence } from "framer-motion"
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
  const [loading, setLoading] = useState(false)

  const handleSelect = async (value: number) => {

  const newAnswers = [...answers, value]
  setAnswers(newAnswers)

  if (current < questions.length - 1) {
    setCurrent(current + 1)
  } else {

  setLoading(true)

  const result = await submitAnswers({
    answers: newAnswers
  })

  localStorage.setItem("result", JSON.stringify(result))

  router.push("/result")

}
}



  const progress = (answers.length / questions.length) * 100

  if (loading) {
  return <AIProcessingScreen />
}
  return (

  <div className="space-y-8">

    {/* Progress Bar */}
    <div className="space-y-2">

      <div className="flex justify-between text-sm text-gray-500">
        <span>Progress</span>
        <span>{Math.round(progress)}%</span>
      </div>

      <ProgressBar progress={progress} />

    </div>


    {/* Question Counter */}
    <p className="text-sm text-gray-500">
      Question {current + 1} of {questions.length}
    </p>


    {/* Question Card */}
    <AnimatePresence mode="wait">

  <motion.div
    key={current}
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.25 }}
  >

    <QuestionCard
      question={questions[current].text}
      options={options}
      onSelect={handleSelect}
    />

  </motion.div>

</AnimatePresence>



  </div>

)
}
