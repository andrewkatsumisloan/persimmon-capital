import React, { useEffect } from "react";
import { Text } from "@chakra-ui/react";
import "./InvestmentGraph.scss";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
    },
  },
};

interface graphData {
  investmentArray: number[];
  yearArray: number[];
}

const InvestmentGraph = (props: any) => {
  // Run investmentGrowth every refresh
  const investmentArray = props.graphData.investmentArray;
  const labels = props.graphData.yearArray;

  const data = {
    labels,
    datasets: [
      {
        label: "Investment Growth",
        data: investmentArray,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="graph-container">
      <Text as="h3" fontSize="xl" fontWeight="bold">
        Projected Investment Growth
      </Text>
      <Line options={options} data={data} />
    </div>
  );
};

export default InvestmentGraph;
