import { useState } from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
    const [visible, setVisible] = useState(false);
    
    return (
        <>
            <Navbar />
            <div className="w-full h-[11rem] bg-[#080b40] text-[#f8f8f8] flex flex-col justify-center items-center py-2 border-b-2 border-[#d1d1d1]">
                <div className="w-[40%] h-[12rem] flex justify-end items-center text-white text-xl ">
                    Feel free to reach out! Whether you have a project in mind, a question, or just want to connect, I'd love to hear from you. Fill out the form below or reach me directly via email, or you can connect with me via the available social platforms below.
                </div>
            </div>
            <div className="w-full h-[70vh] flex flex-row border-r-2 border-[#d1d1d1]">
                <div className="w-[50%] h-[100%] text-white bg-[#080b40] flex flex-col justify-center items-center px-2 border-r-2 py-4">
                 <div className=" w-[100%] h-[12%] gap-2 flex text-2xl pl-6 justify-center items-center">Getting in touch is Easy!!</div>
                 <div className="w-[80%] h-[10%] text-md flex gap-3 justify-center items-start">l&t bypass road,chinniyampalayam,coimbatore-62</div>
                 <div className="w-[80%] h-[8%] text-md flex gap-2 justify-center items-start">+91 9384547684</div>
                 <div className="w-[80%] h-[50%] text-md flex gap-2 items-center justify-center">akashanand9790@gmail.com</div>
                </div>
                <div className="w-[50%] h-[100%] bg-[#080b40] flex flex-row justify-center items-center py-10">
                <div className="h-[100%] w-[100%] bg-[#080b40] flex flex-col justify-center items-center">
                 <div className="h-[100%] w-[100%] bg-[#080b40]  flex flex-col justify-center gap-2 items-center">
                  <div className=" h-[100%] w-[80%] bg-[#080b40] flex flex-col justify-start items-center gap-8 p-2">
                  <input type="text" placeholder="Enter your Name" className="w-[100%] justify-start items-center p-2" />
                  <input type="email" placeholder="Enter your Email" className="w-[100%] justify-start items-center p-2" />
                  <textarea type="text" placeholder="Enter the description" className="w-[100%] justify-start items-center p-2 "/> 
                  <button className="items-center justify-center bg-slate-300 w-1/6 ">SUBMIT</button>
                  </div>
                 </div>
                </div> 
                </div>
            </div>
                {/* <div className="w-[50%] h-full bg-black flex flex-row items-center"></div> */}
        </>
    );
};

export default Contact;
