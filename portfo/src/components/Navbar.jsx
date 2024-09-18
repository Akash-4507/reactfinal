import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="w-screen bg-black">
      <div className="w-full h-[6rem] flex flex-row bg-gray-600 font-bold border-b-2 border-black">

          <div className="w-[50rem] h-full flex justify-center items-center bg-[#b4dae9] text-black px-4">
            <div>AKASH</div>
          </div>
          <div className="flex-1 flex justify-around items-center bg-[#b4dae9] text-black">
            <div className="w-[13rem] text-center py-2 cursor-pointer">ABOUT</div>
            <Link to={'/'}><div className="w-[13rem] text-center py-2 cursor-pointer">PROFILE</div></Link>
            <Link to={'/project'}><div className="w-[13rem] text-center py-2 cursor-pointer">PROJECT</div></Link>
            <Link to={'/contact'}><div className="w-[5rem] text-center py-2 cursor-pointer">CONTACT</div></Link>
          </div>
        </div>
      </div>
      {/* <div className="w-3/5 h-80 bg-slate-500 flex justify-center items-center text-white">
        <div>Some content here</div>
      </div> */}
      
    </>
  );
}

export default Navbar;