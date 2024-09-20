import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="w-screen bg-black">
        <div className="w-full h-24 flex flex-row bg-gray-600 font-bold border-b-2 border-black">

          {/* Branding Section */}
          <div className="w-[50rem] h-full flex justify-center items-center bg-[#d0d5d7] text-black px-4">
            <div className="text-3xl">AKASH</div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex justify-around items-center bg-[#d0d5d7] text-black">
            
            {/* About Section */}
           

            {/* NavLink to Profile */}
            <NavLink
              to="/"
              className={({ isActive }) => 
                `w-[5rem] text-center cursor-pointer transition-colors duration-300 ${isActive ? 'font-bold text-white' : 'text-black'}`
              }
            >
              PROFILE
            </NavLink>

            {/* NavLink to Project */}
            <NavLink
              to="/project"
              className={({ isActive }) => 
                `w-[10rem] text-center py-2 cursor-pointer transition-colors duration-300 ${isActive ? 'font-bold text-white' : 'text-black'}`
              }
            >
              PROJECT
            </NavLink>

            {/* NavLink to Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) => 
                `w-[5rem] text-center py-2 cursor-pointer transition-colors duration-300 ${isActive ? 'font-bold text-white' : 'text-black'}`
              }
            >
              CONTACT
            </NavLink>

            <NavLink
              to="/login"
              className={({ isActive }) => 
                `w-[5rem] text-center py-2 cursor-pointer transition-colors duration-300 ${isActive ? 'font-bold text-white' : 'text-black'}`
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
