import axios from "axios";

import { useEffect, useState } from "react";
import CardWeather from "../components/Home/FutureWeather";
import NavBar from "../components/Home/navbar";
import Forecast from "../components/Home/Forecast";
import Condition from "../components/Home/Condition";
import FutureWeather from "../components/Home/FutureWeather";

function Home() {
  const [weather, setWeather] = useState();
  const key = "77abec3864f748fc9f2200855241504";
  const [city, setCity] = useState("rabat");

  const handleSubmit = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?q=${city}&lang=4&days=7&key=${key}`
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
      <div className=' h-[100vh] flex bg-[#0b131e]'>
        <NavBar />
        <div className='flex  justify-between'>
          <div className="w-full">
            <div className='pt-8 pb-2 w-[135%]'>
              <input
                type='text'
                onChange={(e) => setCity(e.target.value)}
                placeholder='Search for a city'
                className='bg-[#202b3b] text-white p-2 rounded-md w-2/3'
              />
              <button
                className='text-white mx-2 py-2 px-2 rounded-md bg-[#202b3b]'
                onClick={handleSubmit}>
                Search
              </button>
            </div>
            <div className='w-3/3'>
              {weather && (
                <div className='flex justify-between w-3/3 pt-4'>
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
                  <div className='w-2/2'>
                    <img
                      className='w-48 h-48 flex items-center'
                      src={weather.current.condition.icon}></img>
                  </div>
                </div>
              )}

              {weather && <Forecast weather={weather} />}
              {weather && <Condition weather={weather} />}
            </div>
          </div>
          {weather && <FutureWeather weather={weather} />}
        </div>
      </div>
    </>
  );
}

export default Home;
