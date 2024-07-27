/* App.js */
import React, { useRef } from "react";
import { CChart } from "@coreui/react-chartjs";
import { ChartOptions } from "chart.js";
import { getStyle } from "@coreui/utils";
import { GlareCard } from "@/components/ui/glare-card";

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
      data: [28, 48, 40, 19, 96, 27, 100],
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
      pointLabels: {
        color: "#fff",
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
      <CChart
        type="radar"
        ref={ref}
        data={data}
        width={100}
        height={50}
        options={options}
      />
    </GlareCard>
  );
}
