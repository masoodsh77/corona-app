import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeCard from "../../Components/HomeCard/HomeCard";

function Home() {
  const [cases , setCases]= useState({})
  const [death , setDeath]= useState({})
  const [recover , setRecover]= useState({})
  const [vaccina , setVaccina]= useState({})
  useEffect(()=>{
    axios.get("https://disease.sh/v3/covid-19/historical/iran?lastdays=30")
    .then(res=>{     
      setCases(res.data.timeline.cases)
      setDeath(res.data.timeline.deaths)
      setRecover(res.data.timeline.recovered)
      console.log(res.data);
    })
    axios.get("https://disease.sh/v3/covid-19/vaccine/coverage/countries/iran?lastdays=30&fullData=false")
    .then(res=>{
      setVaccina(res.data.timeline)
      console.log(res.data.timeline);
    })
  },[])
  console.log(cases.length);
  console.log(death.length);
  console.log(recover.length);
  return (
    <div className="w-100 h-100">
      <div className="w-100 bg-dark">Covid-19 Iran Information</div>
      <div className="w-100 h-100 d-flex justify-content-between flex-wrap">
      <div className="cards">
          <HomeCard title="Cases" data={cases}/>
        </div>
        <div className="cards">
          <HomeCard title="Deaths" data={death}/>
        </div>
        <div className="cards">
          <HomeCard title="Recovered" data={recover}/>
        </div>
        <div className="cards">
          <HomeCard title="Vaccine" data={vaccina}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
