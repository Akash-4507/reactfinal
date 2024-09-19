import { useState } from "react";
import Navbar from "../components/Navbar";

const Contact=()=>{
    const [visible,Setvisible]=useState(false)
    return(
        <>
        <Navbar />
        {
            visible && (
                <>
                <div className="h-screen w-screen bg-white flex flex-col justify-center items-center">
                 <div className="h-[24rem] w-2/6 bg-white  flex flex-col justify-center gap-2 items-center">
                  <div className=" h-[24rem] w-[97%] bg-[#b4dae9] flex flex-col justify-start items-center gap-8 z-50 p-5">
                  <input type="text" placeholder="Enter your Name" className="w-5/6 justify-start items-center p-2" />
                  <input type="email" placeholder="Enter your Email" className="w-5/6 justify-start items-center p-2" />
                  <input type="number" placeholder="Enter your Age" className="w-5/6 justify-start items-center p-2" />
                  <input type="number" placeholder="Enter your phone" className="w-5/6 justify-start items-center p-2" />
                  <button className="items-center justify-center w-1/6 ">SUBMIT</button>
                  </div>
                 </div>
                </div>
                </>
            )
        }
        {
            !visible &&(
                <>
        <div className="h-[80vh] w-screen flex justify-center items-center z-10">
            <button onClick={()=> Setvisible(true)} className="bg-green-300 p-3 text-white rounded-md">Click me</button>
        </div>

        </>
        )
        }
            </>
    )
};
export default Contact;