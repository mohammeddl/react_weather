import { useState } from "react";
import { NavLink } from "react-router-dom";
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
            <nav className="flex flex-col items-center gap-30">
              <NavLink to={'/'} className='active'>
                <i className="fa-solid fa-cloud-sun-rain text-xl"></i>
                <span>Weather</span>
              </NavLink>
              <NavLink to={'/cities'} className=''>
                <i className="fa-solid fa-list text-xl"></i>
                <span>Cities</span>
              </NavLink>
              <NavLink to={'/map'} className=''>
                <i className="fa-solid fa-map text-xl"></i>
                <span>Map</span>
              </NavLink>
              <NavLink to={'/settings'} className=''>
                <i className="fa-solid fa-gear text-xl"></i>
                <span>Settings</span>
              </NavLink>
            </nav>
          </ul>
        </div>
      </div>
    </aside>
  );
}
