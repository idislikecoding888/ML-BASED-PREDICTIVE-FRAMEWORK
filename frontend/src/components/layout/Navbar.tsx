import Link from "next/link"

export default function Navbar() {
  return (

    <nav className="border-b bg-white">

      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-6">

          <Link href="/" className="font-semibold text-lg">
            CheckMyMind.com
          </Link>

          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Home
          </Link>

        </div>

        <span className="text-sm text-gray-500">
          ML-Based Predictive Framework for Therapy Needs using SCL90
        </span>

      </div>

    </nav>

  )
}