import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="w-screen bg-black">
        <div className="w-full h-24 flex flex-row bg-gray-600 font-bold border-b-2 border-black">

          {/* Branding Section */}
          <div className="w-[50rem] h-full flex justify-center items-center bg-[rgb(20,73,94)] text-indigo-50 px-4">
            <div className="text-3xl">AKASH</div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex justify-around items-center bg-[rgb(20,73,94)] text-stone-400">
            
            {/* About Section */}
           

            {/* NavLink to Profile */}
            <NavLink
              to="/"
              className={({ isActive }) => 
                `w-[5rem] text-center cursor-pointer transition-colors duration-300 ${isActive ? 'font-bold text-white' : 'text-stone-400'}`
              }
            >
              PROFILE
            </NavLink>

            {/* NavLink to Project */}
            <NavLink
              to="/project"
              className={({ isActive }) => 
                `w-[10rem] text-center py-2 cursor-pointer transition-colors duration-300 ${isActive ? 'font-bold text-white' : 'text-stone-400'}`
              }
            >
              PROJECT
            </NavLink>

            {/* NavLink to Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) => 
                `w-[5rem] text-center py-2 cursor-pointer transition-colors duration-300 ${isActive ? 'font-bold text-white' : 'text-stone-400'}`
              }
            >
              CONTACT
            </NavLink>

            <NavLink
              to="/login"
              className={({ isActive }) => 
                `w-[5rem] text-center py-2 cursor-pointer transition-colors duration-300 ${isActive ? 'font-bold text-white' : 'text-stone-400 '}`
              }
            >
             Login
            </NavLink>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
