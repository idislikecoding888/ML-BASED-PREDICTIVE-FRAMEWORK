"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function StartPage() {

  const router = useRouter()

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [anonymous, setAnonymous] = useState(false)

  const handleStart = async () => {

    const payload = anonymous
      ? { anonymous: true }
      : { name, phone }

    await axios.post("http://127.0.0.1:8000/user", payload)

    router.push("/assessment")

  }

  return (

    <div className="max-w-xl mx-auto py-20 space-y-8">

      <h1 className="text-2xl font-semibold text-center">
        Before starting the assessment
      </h1>


      <div className="space-y-4">

        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          disabled={anonymous}
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="text"
          placeholder="Phone number"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          disabled={anonymous}
          className="w-full border rounded-lg px-4 py-3"
        />

        <label className="flex items-center gap-2 text-sm text-gray-600">

          <input
            type="checkbox"
            checked={anonymous}
            onChange={()=>setAnonymous(!anonymous)}
          />

          Take test anonymously

        </label>


        <button
          onClick={handleStart}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Start Assessment
        </button>

      </div>

    </div>

  )
}