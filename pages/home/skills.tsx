/* App.js */
import React from "react";
import { CChartDoughnut } from "@coreui/react-chartjs";

const data = {
  labels: ["React", "Vue", "API"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

export default function Skills() {
  return (
    <div className="relative m-12">
      <CChartDoughnut data={data} />
    </div>
  );
}
