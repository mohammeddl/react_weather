export default function Forecast({ weather }) {
  const fetchData = weather?.forecast?.forecastday[0]?.hour || [];
  console.log(fetchData);

  return (
    <>
      <div className='bg-[#202b3b] py-6 rounded-3xl'>
        <p className='pl-8 text-gray-300'>TODAY'S FOREC </p>
        <ul role='list' className='divide-x divide-gray-200 gap-2 flex mx-6'>
          {fetchData.slice(5, 11).map((hour, index) => (
            <li key={index} className='rounded-3xl p-4 mx-2 w-20'>
              <p className='text-gray-300'>{hour.time}</p>
              <img className='w-70 h-70' src={hour.condition.icon} alt='' />
              <h1 className='text-white text-2xl'>{hour.temp_c}&deg;</h1>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
