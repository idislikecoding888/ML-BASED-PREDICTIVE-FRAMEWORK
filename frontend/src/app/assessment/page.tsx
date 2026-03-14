import QuestionForm from "@/components/questionnaire/QuestionForm"

export default function AssessmentPage(){

  return (
    <div className="space-y-10">

      <div className="text-center space-y-3">

        <h1 className="text-3xl font-bold">
          Mental Health Assessment
        </h1>

        <p className="text-gray-500">
          Answer a few questions to receive a psychological screening report.
        </p>

      </div>

      <QuestionForm />

    </div>
  )
}