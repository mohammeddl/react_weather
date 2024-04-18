import {useTranslation} from "react-i18next";

export default function FutureWeather({ weather }) {
  const fetchData = weather?.forecast?.forecastday || [];
  console.log(fetchData);

  const getDayName = (date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayIndex = new Date(date).getDay();
    return days[dayIndex];
  };

  const {t} = useTranslation();

  return (
    <>
      <div className='bg-[#202b3b] py-4 rounded-3xl w-[80vh]  h-[94vh] p-3 m-7 '>
        <p className='pl-8  text-gray-300'>{t("weekCast")}</p>
        <ul role='list' className='divide-y  divide-gray-200 gap-2 py-6  mx-6'>
          {fetchData.map((days, index) => (
            <li key={index} className='rounded-3xl h-[12vh] py-2  mx-2 w-96'>
              <div className='flex justify-evenly'>
                <div className='flex items-center w-12'>
                  <p className='text-gray-300  text-sm '>
                    {getDayName(days.date)}
                  </p>
                </div>
                <p className='text-gray-300 text-sm'>{days.date}</p>
                <p className='text-gray-300 text-sm'>
                  {days.day.condition.text}
                </p>
              </div>
              <div className='flex justify-around'>
                <img
                  className='w-12 h-12'
                  src={days.day.condition.icon}
                  alt={days.day.condition.icon}
                />
                <h1 className='text-white text-1xl flex items-center'>
                  {days.day.avgtemp_c}&deg;
                </h1>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
