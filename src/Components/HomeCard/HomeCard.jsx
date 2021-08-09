import React from "react";
import { Line } from "react-chartjs-2";

function HomeCard({ title, data }) {
    ;
  const state = {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
    datasets: [
      {
        label: title,
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: [
          0,
          5,
          10,
          15,
          56,
          56,
          56,
          56,
          56,
          56,
          56,
          56,
          56,
          56,
          56,
          56,
          56,
          56,
          56,
          56,
          56,
          56,
          56,
          56,
          56,
          65,
          59,
          80,
          81,
          56,
        ],
      },
    ],
};

    return (
    <div className="w-100 h-100">
      <div className="bg-dark mt-2 w-100 h-100">
        <div className="w-100">Covid-19 Iran {title} in 30 Days</div>
        <div className="w-100">
          <Line
            data={state}
            options={{
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
