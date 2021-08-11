import React from "react";
import { Line } from "react-chartjs-2";

function HomeCard({ title, data }) {
  if(title === "Cases"){  
    var   color = "rgb(248, 157, 19)"
  }else if(title === "Deaths"){
    color = "rgb(190, 49, 68)"
  }else{
    color="rgb(0, 159, 157)"
  }
  const state = { 
    datasets: [
      {
        label: title,
        fill: true,
        lineTension: 0.5,
        backgroundColor: color,
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data:data
      },
    ],
};
console.log(data);
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
