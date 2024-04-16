import axios from "axios";

import { useEffect, useState } from "react";
import CardWeather from "../components/Home/card";
import NavBar from "../components/Home/navbar";
import Forecast from "../components/Home/Forecast";

function Home() {
  const [weather, setWeather] = useState();
  const key = "77abec3864f748fc9f2200855241504";
  const [city, setCity] = useState("rabat");
  const handleSubmit = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=1&key=${key}`
      );
      console.log(response.data);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <>
      <div className=' min-h-screen flex bg-[#0b131e]'>
        <NavBar />
        <div className='flex  w-[100%] justify-between'>
          <div >
            <div className='py-12 w-[180%]'>
              <input
                type='text'
                onChange={(e) => setCity(e.target.value)}
                placeholder='Search for a city'
                className="bg-[#202b3b] text-white p-2 rounded-md w-2/3"
              />
              <button className="text-white mx-2 py-2 px-2 rounded-md bg-[#202b3b]" onClick={handleSubmit}>Search</button>
            </div>
            <div className='w-3/3'>
              {weather && (
                <div className='flex justify-between w-2/3 pb-12'>
                  <div>
                    <h2 className='text-white text-5xl font-semibold pb-4'>
                      {weather.location.name}
                    </h2>
                    <p className='text-gray-200 text-1xl'>
                      Humidity: {weather.current.humidity}%
                    </p>
                    <p className='text-5xl text-white py-2'>
                      {Math.round(weather.current.feelslike_c)}
                      <sup className='text-2xl'>&deg;C</sup>
                    </p>
                  </div>
                  <img
                    className='h-100 w-100'
                    src={weather.current.condition.icon}></img>
                </div>
              )}

              {weather && <Forecast weather={weather} />}
            </div>
          </div>
          {weather && <CardWeather weather={weather} />}
        </div>
      </div>
    </>
  );
}

export default Home;
