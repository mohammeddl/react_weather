
import axios from "axios";

import { useEffect, useState } from "react";



function Home() {

const [weather, setWeather]= useState(null)
const key = "683625147e584cbab0c104131241504"

const handleSubmit = async()=>{
    try{
        const response = await axios.get("https://api.weatherapi.com/v1/current.json?q=rabat&key=683625147e584cbab0c104131241504")
        console.log(response.data)
        setWeather(response.data)

    }catch(error){
        console.error('Error fetching weather data:', error);
    }
}
useEffect(()=>{
    handleSubmit()
},[])
    
  return <div>
  <input type="text" placeholder="Search for a city" />
  <button onClick={handleSubmit}>Search</button>
  </div>;
}

export default Home;
