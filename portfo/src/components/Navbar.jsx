import React from 'react';
import { NavLink } from 'react-router-dom';
import bg from '../assets/img/bg.jpg'

const Navbar = () => {
  return (
    <>
      
        <div className="w-full h-20 flex flex-row border-b-2 border-[#f8f8f8]">

          {/* Branding Section */}
          <div className="w-[40rem] h-full flex justify-center items-center bg-[#080b40] text-indigo-50 px-4">
            <div className="text-3xl">AKASH</div>
          </div>

          {/* Navigation Links */}
          <div className="w-[60rem] h-full flex justify-center items-center bg-[#080b40] text-stone-400">
            
            {/* About Section */}
           

            {/* NavLink to Profile */}
            <NavLink
              to="/"
              className={({ isActive }) => 
                `w-[10rem] text-center justify-center items-center cursor-pointer transition-colors duration-300 ${isActive ? 'font-bold text-white' : 'text-stone-400'}`
              }
            >
              PROFILE
            </NavLink>

            {/* NavLink to Project */}
            <NavLink
              to="/project"
              className={({ isActive }) => 
                `w-[10rem] text-center py-2 items-center cursor-pointer transition-colors duration-300 ${isActive ? 'font-bold text-white' : 'text-stone-400'}`
              }
            >
              PROJECT
            </NavLink>

            {/* NavLink to Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) => 
                `w-[10rem] text-center py-2 items-center cursor-pointer transition-colors duration-300 ${isActive ? 'font-bold text-white' : 'text-stone-400'}`
              }
            >
              CONTACT
            </NavLink>

            <NavLink
              to="/login"
              className={({ isActive }) => 
                `w-[10rem] text-center justify-center items-center  cursor-pointer transition-colors duration-300 ${isActive ? 'font-bold text-white' : 'text-stone-400 '}`
              }
            >
             LOGIN
            </NavLink>

          </div>
        </div>
      
    </>
  );
};

export default Navbar;
