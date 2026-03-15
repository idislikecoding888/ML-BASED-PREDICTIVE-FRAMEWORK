"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface Option {
  label: string
  value: number
}

interface Props {
  question: string
  options: Option[]
  onSelect: (value: number) => void
}

export default function QuestionCard({ question, options, onSelect }: Props) {

  const [selected, setSelected] = useState<number | null>(null)

  const handleClick = (value: number) => {

    if (selected !== null) return

    setSelected(value)

    setTimeout(() => {
      onSelect(value)
    }, 650)

  }

  // KEYBOARD SHORTCUTS
  useEffect(() => {

    const handleKeyPress = (event: KeyboardEvent) => {

      if (selected !== null) return

      const key = parseInt(event.key)

      if (key >= 1 && key <= options.length) {
        handleClick(options[key - 1].value)
      }

    }

    window.addEventListener("keydown", handleKeyPress)

    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }

  }, [selected])

  return (

    <div className="bg-white border rounded-xl p-6 shadow-sm space-y-4">

      <h2 className="text-lg font-semibold">
        {question}
      </h2>

      <div className="grid gap-3">

        {options.map((option, index) => {

          const isSelected = selected === option.value

          return (

            <motion.button
              key={option.value}
              onClick={() => handleClick(option.value)}
              whileTap={{ scale: 0.97 }}
              className={`
                border rounded-lg px-4 py-3 text-left transition flex justify-between items-center

                ${isSelected
                  ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                  : "hover:bg-gray-50"}
              `}
            >

              <span>
                <span className="text-gray-400 mr-2">
                  {index + 1}.
                </span>
                {option.label}
              </span>

              {isSelected && (
                <span className="text-indigo-600 font-bold">
                  
                </span>
              )}

            </motion.button>

          )

        })}

      </div>

    </div>

  )
}