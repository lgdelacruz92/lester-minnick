/* App.js */
import React, { useRef } from "react";
import { CChart } from "@coreui/react-chartjs";
import { ChartOptions } from "chart.js";
import { getStyle } from "@coreui/utils";
import { GlareCard } from "@/components/ui/glare-card";
import MobileBlock from "@/components/layouts/mobile-block";
import DesktopBlock from "@/components/layouts/desktop-block";

const data = {
  labels: [
    "Typescript",
    "Problem Solving",
    "HTML/CSS",
    "AI Tech",
    "Backend",
    "Cloud",
    "SQL",
  ],
  datasets: [
    {
      label: "Technical Strengths",
      backgroundColor: "rgba(151, 187, 205, 0.2)",
      borderColor: getStyle("--cui-success"),
      pointBackgroundColor: getStyle("--cui-cyan"),
      pointBorderColor: getStyle("--cui-success"),
      pointHighlightFill: getStyle("--cui-success"),
      pointHighlightStroke: getStyle("--cui-success"),
      data: [95, 100, 90, 50, 75, 50, 65],
    },
  ],
};

const options: ChartOptions = {
  plugins: {
    legend: {
      labels: {
        color: "#fff",
      },
    },
  },
  scales: {
    r: {
      beginAtZero: true,
      pointLabels: {
        color: "#fff",
      },
    },
  },
};

export default function Skills() {
  const ref = useRef();

  return (
    <div className="flex flex-col items-center rounded-md p-4">
      <div className="flex items-center text-base font-bold text-white">
        <span className="w-full text-center">Skills</span>
      </div>
      <CChart type="radar" ref={ref} data={data} options={options} />
    </div>
  );
}
