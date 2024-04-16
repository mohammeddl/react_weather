import { useState } from "react";
import logo from "../../assets/logo.png"

export default function NavBar() {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <aside
      className={`flex flex-col m-7 rounded-3xl h-[100vh] p-3 bg-[#202b3b] dark:text-gray-800
            ${mobileNav ? "w-16" : "w-40"}
        `}>
      <div className='space-y-3 h-[80vh]'>
        <div className='flex items-center justify-between '>
          <img  src={logo} className={`${mobileNav ? "hidden" : "hidden md:block w-20 h-20 ml-4"}`}></img>
          <button className='p-2 ml-1 block md:hidden' onClick={() => setMobileNav(!mobileNav)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              className='w-5 h-5 fill-current dark:text-gray-800'>
              <rect width='352' height='32' x='80' y='96'></rect>
              <rect width='352' height='32' x='80' y='240'></rect>
              <rect width='352' height='32' x='80' y='384'></rect>
            </svg>
          </button>
        </div>
        <div className='flex-1'>
          <ul className='pt-2 pb-4 space-y-1 text-sm'>
            <li className='rounded-sm'>
              <a
                rel='noopener noreferrer'
                href='#'
                className='flex items-center text-white font-semibold p-2 space-x-3 rounded-md'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='14'
                  width='17.5'
                  viewBox='0 0 640 512'
                    className='w-6 h-8 fill-curren text-w-600'>
                  <path
                    fill='#9ca0a5'
                    d='M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z'
                  />
                </svg>
                <span className={`${mobileNav ? "hidden" : "block"}`}>
                Weather
                </span>
              </a>
            </li>
            <li className='rounded-sm dark:bg-gray-100 dark:text-gray-900'>
              <a
                rel='noopener noreferrer'
                href='#'
                className='flex items-center p-2 space-x-3 rounded-md'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  className='w-5 h-5 fill-current dark:text-gray-600'>
                  <path d='M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z'></path>
                </svg>
                <span className={`${mobileNav ? "hidden" : "block"}`}>
                  settings
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
