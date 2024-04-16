export default function Condition({ weather }) {
  const conditions = weather.current;
  console.log(conditions);

  return (
    <>
      <div className='bg-[#202b3b] my-6 rounded-3xl'>
        <p className='pl-12 text-gray-300'>AIR CONDITIONS </p>
        <div className='grid grid-cols-2 px-12 py-2 gap-4'>
          <div>
            <div className='flex gap-2 items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='14'
                width='14'
                viewBox='0 0 512 512'>
                <path
                  fill='#a3a3a3'
                  d='M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z'
                />
              </svg>
              <p className='text-gray-200 '>UV index</p>
            </div>
            <p className='text-white pl-4 font-semibold text-2xl'>{conditions.uv}</p>
          </div>
          <div>
            <div className='flex gap-2 items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='14'
                width='10.5'
                viewBox='0 0 384 512'>
                <path
                  fill='#a39f9f'
                  d='M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z'
                />
              </svg>
              <p className='text-gray-200 '>Chance of rain</p>
            </div>
            <p className='text-white pl-4 text-2xl font-semibold'>
              {conditions.precip_mm} mm
            </p>
          </div>
          <div>
            <div className='flex gap-2 items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='14'
                width='14'
                viewBox='0 0 512 512'>
                <path
                  fill='#ababab'
                  d='M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z'
                />
              </svg>
              <p className='text-gray-200 '>Wind</p>
            </div>
            <p className='text-white font-semibold pl-4 text-2xl'>
              {conditions.wind_kph}km/h
            </p>
          </div>
          <div>
            <div className='flex gap-2 items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='14'
                width='8.75'
                viewBox='0 0 320 512'>
                <path
                  fill='#a3a3a3'
                  d='M160 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V144c0-8.8 7.2-16 16-16s16 7.2 16 16V322.7c18.6 6.6 32 24.4 32 45.3z'
                />
              </svg>
              <p className='text-gray-200 '>Real feel</p>
            </div>
            <p className='text-white pl-4 font-semibold text-2xl'>
              {conditions.feelslike_c}&deg;C
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
