interface Option {
 label: string
 value: number
}

interface Props {
 question: string
 options: Option[]
 onSelect: (value: number) => void
}

export default function QuestionCard({
  question,
  options,
  onSelect
}: Props) {

  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm space-y-4">

      <h2 className="text-lg font-semibold">
        {question}
      </h2>

      <div className="grid gap-3">

        {options.map((option) => (
<button
 key={option.value}
 onClick={() => onSelect(option.value)}
 className="border rounded-lg px-4 py-3 text-left hover:bg-gray-50 transition"
>
 {option.label}
</button>
))}

      </div>

    </div>
  )
}