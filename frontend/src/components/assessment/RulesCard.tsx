export default function RulesCard({ onStart }: { onStart: () => void }) {

  return (

    <div className="bg-white border rounded-xl p-6 shadow-sm space-y-6">

      <h2 className="text-xl font-semibold">
        Before you begin
      </h2>

      <ul className="space-y-2 text-gray-600 text-sm">

        <li>• Answer based on how you have felt during the past week.</li>

        <li>• Do not overthink — select the first response that feels accurate.</li>

        <li>• There are no right or wrong answers in this assessment.</li>

        <li>• Try to answer every question honestly for the most accurate result.</li>

        <li>• You may press keys <b>1–5</b> or click options to answer.</li>

        <li>• This screening tool is not a medical diagnosis.</li>

      </ul>

      <button
        onClick={onStart}
        className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
      >
        Begin the Test
      </button>

    </div>

  )
}