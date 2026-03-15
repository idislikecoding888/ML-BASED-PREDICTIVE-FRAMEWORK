"use client"

import { useState } from "react"
import QuestionForm from "@/components/questionnaire/QuestionForm"
import RulesCard from "@/components/assessment/RulesCard"

export default function AssessmentPage(){

  const [started, setStarted] = useState(false)

  return (

    <div className="max-w-3xl mx-auto py-10">

      {!started ? (

        <RulesCard onStart={() => setStarted(true)} />

      ) : (

        <QuestionForm />

      )}

    </div>

  )

}