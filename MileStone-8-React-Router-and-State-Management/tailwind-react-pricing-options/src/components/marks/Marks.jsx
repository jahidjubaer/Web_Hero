import React, { use } from "react";
import { CartesianGrid, LineChart,XAxis,YAxis,Tooltip,Legend, Line } from "recharts";

const Marks = ({ marksPromise }) => {
  const marksRes = use(marksPromise);
  const marksData = marksRes.data;
  //   console.log(marksData.marks);

  //   data processing
  const marksChartData = marksData.map((marks) => {
    const Data = {
      name: marks.name,
      roll: marks.roll,
      semester: marks.semester,
      ComputerNetworks: marks.marks.computerNetworks,
      DataStructures: marks.marks.dataStructures,
      DatabaseSystems: marks.marks.databaseSystems,
      DiscreteMathematics: marks.marks.discreteMathematics,
      OperatingSystems: marks.marks.operatingSystems,
    };

    return Data;
  });

  console.log(marksChartData);

  return (
    <div className="w-10/12 mx-auto">
      <LineChart
        width={730}
        height={250}
        data={marksChartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="ComputerNetworks" stroke="#8884d8" />
        <Line type="monotone" dataKey="DatabaseSystems" stroke="#82ca9d" />
        <Line type="monotone" dataKey="DataStructures" stroke="green" />
        <Line type="monotone" dataKey="DiscreteMathematics" stroke="red" />
      </LineChart>
    </div>
  );
};



export default Marks;
