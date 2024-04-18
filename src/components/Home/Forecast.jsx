import {useTranslation} from "react-i18next";

export default function Forecast({ weather }) {
  const fetchData = weather?.forecast?.forecastday[0]?.hour || [];
  console.log(fetchData);

  const {t} = useTranslation();
  return (
    <>
      <div className='bg-[#202b3b] py-4 rounded-3xl h-1/3'>
        <p className='pl-8 text-gray-300'>{t("todayCast")} </p>
        <ul role='list' className='divide-x divide-gray-200 gap-2 flex mx-6'>
          {fetchData.slice(5, 11).map((hour, index) => (
            <li key={index} className='rounded-3xl p-4 mx-2 '>
              <p className='text-gray-300'>{hour.time}</p>
              <img className='w-70 h-70' src={hour.condition.icon} alt={hour.condition.icon} />
              <h1 className='text-white text-2xl'>{hour.temp_c}&deg;</h1>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
