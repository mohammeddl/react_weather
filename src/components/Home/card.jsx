export default function CardWeather({ weather }) {
  return (
    <div className='bg-white rounded-lg shadow-md p-6 w-full max-w-md '>
        <h2 className='text-2xl font-semibold mb-4'>
          {weather.location.name}, {weather.location.country}
        </h2>
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center'>
            <img
              className='mr-4'
              src={weather.current.condition.icon}
              alt={weather.current.condition.icon}
              width='50'
              height='50'
            />
            <p className='text-lg'>
              {Math.round(weather.current.feelslike_c)}
              <sup className='text-sm'>&deg;C</sup>
            </p>
          </div>
          <p className='text-lg'>
            {weather.current.localtime}
          </p>
        </div>
        <div className='flex justify-between'>
          <p>Humidity: {weather.current.humidity}%</p>
          <p>Wind Speed: {weather.current.vis_km}km/h</p>
        </div>
      </div>
  );
}