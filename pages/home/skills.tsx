/* App.js */
import React, { useRef } from "react";
import { CChart } from "@coreui/react-chartjs";
import { ChartOptions } from "chart.js";
import { getStyle } from "@coreui/utils";
import { GlareCard } from "@/components/ui/glare-card";

const data = {
  labels: [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running",
  ],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(220, 220, 220, 0.2)",
      borderColor: "rgba(220, 220, 220, 1)",
      pointBackgroundColor: "rgba(220, 220, 220, 1)",
      pointBorderColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220, 220, 220, 1)",
      data: [65, 59, 90, 81, 56, 55, 40],
    },
    {
      label: "My Second dataset",
      backgroundColor: "rgba(151, 187, 205, 0.2)",
      borderColor: "rgba(151, 187, 205, 1)",
      pointBackgroundColor: "rgba(151, 187, 205, 1)",
      pointBorderColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151, 187, 205, 1)",
      data: [28, 48, 40, 19, 96, 27, 100],
    },
  ],
};

const options: ChartOptions = {
  plugins: {
    legend: {
      labels: {
        color: getStyle("--cui-body-color"),
      },
    },
  },
  scales: {
    r: {
      grid: {
        color: getStyle("--cui-border-color-translucent"),
      },
      ticks: {
        color: getStyle("--cui-body-color"),
      },
    },
  },
};

export default function Skills() {
  const ref = useRef();

  return (
    <GlareCard className="relative p-4">
      <div className="flex items-center text-base font-bold text-white">
        <span className="w-full text-center">Skills</span>
      </div>
      <CChart type="radar" ref={ref} data={data} width={150} height={75} />
    </GlareCard>
  );
}
