import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const playerStats = [
  {
    id: 1,
    name: "Virat Kohli",
    country: "India",
    format: "ODI",
    matches: 292,
    averageRun: 58.2,
  },
  {
    id: 2,
    name: "Babar Azam",
    country: "Pakistan",
    format: "ODI",
    matches: 117,
    averageRun: 56.7,
  },
  {
    id: 3,
    name: "Joe Root",
    country: "England",
    format: "Test",
    matches: 140,
    averageRun: 49.5,
  },
  {
    id: 4,
    name: "Steve Smith",
    country: "Australia",
    format: "Test",
    matches: 110,
    averageRun: 58.6,
  },
  {
    id: 5,
    name: "Kane Williamson",
    country: "New Zealand",
    format: "Test",
    matches: 100,
    averageRun: 54.9,
  },
  {
    id: 6,
    name: "Shakib Al Hasan",
    country: "Bangladesh",
    format: "ODI",
    matches: 240,
    averageRun: 38.4,
  },
  {
    id: 7,
    name: "David Warner",
    country: "Australia",
    format: "T20I",
    matches: 100,
    averageRun: 32.8,
  },
  {
    id: 8,
    name: "Rohit Sharma",
    country: "India",
    format: "ODI",
    matches: 262,
    averageRun: 48.6,
  },
  {
    id: 9,
    name: "Jos Buttler",
    country: "England",
    format: "T20I",
    matches: 120,
    averageRun: 36.4,
  },
  {
    id: 10,
    name: "Tamim Iqbal",
    country: "Bangladesh",
    format: "ODI",
    matches: 240,
    averageRun: 36.9,
  },
];

// using re chart 
const RunChart = () => {
  return (
    <div className="w-11/12 mx-auto">
      <BarChart width={1440} height={250} data={playerStats}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}

        <XAxis dataKey="name" />
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
        {/* <Bar dataKey="matches" fill="#8884d8" /> */}
        <Bar dataKey="averageRun" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default RunChart;
