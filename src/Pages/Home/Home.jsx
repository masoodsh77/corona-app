import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeCard from "../../Components/HomeCard/HomeCard";

function Home() {
  const [cases , setCases]= useState([])
  useEffect(()=>{
    axios.get("https://disease.sh/v3/covid-19/historical/iran?lastdays=30")
    .then(res=>{     
      setCases(res.data.timeline.cases)
      console.log(res.data.timeline.cases);
    })
  },[])
  return (
    <div className="w-100 h-100">
      <div className="w-100 bg-dark">Covid-19 Iran Information</div>
      <div className="w-100 h-100 d-flex justify-content-between">
      <div className="cards">
          <HomeCard title="Cases" data={cases}/>
        </div>
        <div className="cards">
          <HomeCard title="Deaths"/>
        </div>
        <div className="cards">
          <HomeCard title="Recovered"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
