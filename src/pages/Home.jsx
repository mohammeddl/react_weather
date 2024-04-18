import axios from "axios";

import { useEffect, useState } from "react";
import {useTranslation} from "react-i18next";
//import CardWeather from "../components/Home/FutureWeather";
//import NavBar from "../components/Home/navbar";
import Forecast from "../components/Home/Forecast";
import Condition from "../components/Home/Condition";
import FutureWeather from "../components/Home/FutureWeather";
import ar from "../assets/ar.png"
import fr from "../assets/fr.png"
import en from "../assets/en.png"

function Home() {
  const [weather, setWeather] = useState();
  const key = "402fbfadc87441159fe141236241704";
  const keey = '188f6e276831bbab19cc0ba7441ef581'
  const [city, setCity] = useState("rabat");
  useEffect(() => {
    const fetchCity = async () => {
      try {
        const position = await getCurrentPosition();
        const cityData = await getCityFromCoordinates(position.coords.latitude, position.coords.longitude);
        
        setCity(cityData);
      } catch (error) {
        console.error('Error fetching city:', error);
      }
    };

    fetchCity();
  }, []);

  const {t} = useTranslation();
  const {i18n} = useTranslation();

  const changeLanguage = (k) => {
    i18n.changeLanguage(k);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => resolve(position),
        error => reject(error)
      );
    });
  };

  const getCityFromCoordinates = async (latitude, longitude) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${keey}&units=metric`);
    const data = await response.json();
    return data.name;
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?q=${city}&lang=4&days=7&key=${key}`
      );
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
      <div className=' h-[100vh] flex bg-[#0b131e] px-2'>
        {/* <NavBar /> */}
        <div className='flex  justify-between'>
          <div className="w-full">
            <div className="mt-4 flex gap-4">
              <button onClick={() => changeLanguage("ar")}><img src={ar} alt="english"  className="w-6"/></button>
              <button onClick={() => changeLanguage("fr")}><img src={fr} alt="english"  className="w-6"/></button>
              <button onClick={() => changeLanguage("en")}><img src={en} alt="english"  className="w-6"/></button>
            </div>
            <div className='pt-8 pb-2 w-[135%]'>
              <input
                type='text'
                onChange={(e) => setCity(e.target.value)}
                placeholder={t("searchCity")}
                className='bg-[#202b3b] text-white p-2 rounded-md w-2/3'
              />
              <button
                className='text-white mx-2 py-2 px-2 rounded-md bg-[#202b3b]'
                onClick={handleSubmit}>
                {t("searchBtn")}
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
                      {t("humidity")}: {weather.current.humidity}%
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
