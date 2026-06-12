"use client"

import {
  Radar
} from "react-chartjs-2"

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js"

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

export default function SCLRadarChart({
  scores
}: {
  scores: Record<string, number>
}) {

  const data = {

    labels: [
      "SOM",
      "OC",
      "IS",
      "DEP",
      "ANX",
      "HOS",
      "PHOB",
      "PAR",
      "PSY"
    ],

    datasets: [

      {
        label: "Patient Profile",

        data: [
          scores.SOM,
          scores.OC,
          scores.IS,
          scores.DEP,
          scores.ANX,
          scores.HOS,
          scores.PHOB,
          scores.PAR,
          scores.PSY
        ],

        backgroundColor:
          "rgba(99,102,241,0.2)",

        borderColor:
          "rgb(99,102,241)",

        borderWidth: 2,

        pointBackgroundColor:
          "rgb(99,102,241)"
      },

      {
        label: "Clinical Threshold",

        data: [
          65,65,65,65,65,65,65,65,65
        ],

        borderColor:
          "rgba(255,255,255,0.6)",

        borderDash: [6, 6],

        pointRadius: 0
      }

    ]
  }

  const options = {

    responsive: true,

    scales: {

      r: {

        min: 30,
        max: 80,

        ticks: {
          stepSize: 10
        }

      }

    }

  }

  return (
    <Radar
      data={data}
      options={options}
    />
  )
}