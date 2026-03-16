"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function StartPage() {

  const router = useRouter()

  const [mode, setMode] = useState<"details" | "anonymous" | null>(null)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const handleStart = async () => {

    if (!mode) {
      alert("Please choose an option before continuing.")
      return
    }

    if (mode === "details" && (!name || !phone)) {
      alert("Please enter your name and phone number.")
      return
    }

    const payload =
      mode === "anonymous"
        ? { anonymous: true }
        : { name, phone }

    // await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user`, payload)

    // router.push("/assessment")
    try {
  await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user`, payload)
} catch (err) {
  console.error("User save failed:", err)
}

router.push("/assessment")
  }

  return (

    <div className="max-w-xl mx-auto py-20 space-y-8">

      <h1 className="text-2xl font-semibold text-center">
        Before starting the assessment
      </h1>


      {/* OPTION CARDS */}

      <div className="space-y-4">

        <div
          onClick={() => setMode("details")}
          className={`border rounded-lg p-5 cursor-pointer transition
          ${mode === "details"
            ? "border-indigo-500 bg-indigo-50"
            : "border-gray-300 hover:border-gray-400"}`}
        >

          <p className="font-medium">
            Provide your details
          </p>

          <p className="text-sm text-gray-500">
            Your name and phone number will be stored with the assessment.
          </p>

        </div>


        <div
          onClick={() => setMode("anonymous")}
          className={`border rounded-lg p-5 cursor-pointer transition
          ${mode === "anonymous"
            ? "border-indigo-500 bg-indigo-50"
            : "border-gray-300 hover:border-gray-400"}`}
        >

          <p className="font-medium">
            Take the test anonymously
          </p>

          <p className="text-sm text-gray-500">
            No personal information will be recorded.
          </p>

        </div>

      </div>


      {/* DETAILS FORM */}

      {mode === "details" && (

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            type="text"
            placeholder="Phone number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />

        </div>

      )}


      {/* START BUTTON */}

      <button
        onClick={handleStart}
        className={`w-full py-3 rounded-lg text-white transition
        ${mode
          ? "bg-indigo-600 hover:bg-indigo-700"
          : "bg-gray-400 cursor-not-allowed"}`}
      >
        Start Assessment
      </button>

    </div>

  )
}
