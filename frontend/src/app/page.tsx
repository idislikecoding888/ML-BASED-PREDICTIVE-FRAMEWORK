import Link from "next/link"

export default function Home() {

  return (

    <div className="max-w-3xl mx-auto py-20 space-y-16">

      <div className="text-center space-y-3">

        <h1 className="text-9xl font-bold tracking-tight">
          SCL90
        </h1>

        <h2 className="text-3xl font-bold tracking-tight">
          PREDICTIVE FRAMEWORK
        </h2>

        <p className="text-gray-600 mt-6 leading-relaxed">

          The SCL-90 (Symptom Checklist-90) is a psychological assessment
          designed to evaluate a broad range of mental health symptoms.
          Our predictive framework analyzes responses using machine learning
          and psychological scoring techniques to identify potential mental
          health patterns and recommend appropriate support pathways.

        </p>

      </div>


      <div className="bg-white border rounded-xl p-8 shadow-sm space-y-6 text-center">

        <p className="text-gray-700 leading-relaxed">

          Checking in with your mental health is not a sign of weakness.
          Therapy is not something shameful — it is a chance to be heard,
          understood, and supported even when your mind tells you
          change is impossible.

        </p>

        <blockquote className="italic text-gray-600">
          “It is an act of bravery to feel your feelings.”
        </blockquote>

        <p className="text-sm text-gray-500">
          — Gayle Forman
        </p>


        <Link
          href="/start"
          className="inline-block px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          Take the Assessment
        </Link>

      </div>

    </div>

  )
}