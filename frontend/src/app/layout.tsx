import "./globals.css"
import Navbar from "@/components/layout/Navbar"

export const metadata = {
  title: "CheckMyMind.com",
  description: "ML Based Predictive Framework for Therapy Needs using SCL90"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        <main className="max-w-4xl mx-auto px-6 py-10">
          {children}
        </main>

      </body>
    </html>
  )
}