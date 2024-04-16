import { useState } from "react";
import logo from "../../assets/logo.png"

export default function NavBar() {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <aside
      className={`flex flex-col m-7 rounded-3xl h-[94vh] p-3 bg-[#202b3b] dark:text-gray-800
            ${mobileNav ? "w-16" : "w-40"}
        `}>
      <div className='space-y-3 h-[80vh]'>
        <div className='flex items-center justify-between '>
          <img  src={logo} className={`${mobileNav ? "hidden" : "hidden md:block w-16 h-14 ml-6"}`}></img>
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
              <div
                rel='noopener noreferrer'
                href='#'
                className='flex items-center text-white px-2 bg-gray-500 bg-opacity-25   font-semibold p-1 space-x-3 rounded-md'>
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
                <span className={`${mobileNav ? "hidden" : "block"} `}>
                Weather
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
