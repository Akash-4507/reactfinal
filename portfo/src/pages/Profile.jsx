import Navbar from "../components/Navbar";
import akpic from "../assets/img/akpro.jpg"

// import Pro from '../assets/img/akash.jpg';
const Profile=()=>{
    return(
     <>
     <Navbar />
     <div className="w-full h-[38rem] flex flex-row justify-center items-center ">
      <div className="w-5/5 h-[30rem] bg-[#f8f8f8] flex flex-col justify-center items-center border-b-2 border-black pt-6">
       <div className="w-[100rem] h-[25rem] bg-[#f8f8f8] text-black flex flex-col justify-center items-center font-bold rounded-md ">
        <img src={akpic} alt="akash" className=" justify-center items-center rounded-full"/>
       </div>
       <div className="w-[50rem] h-[8rem] bg-[#f8f8f8] text-black flex flex-col justify-center items-center text-4xl font-bold rounded-md pt-8">
        HI, I AM AKASH!
        </div>
      <div className="w-[65rem] h-[40rem] bg-[#f8f8f8] text-zinc-900 font-bold flex flex-col justify-center items-center rounded-md text-lg pt-11">
      I'm currently pursuing Third-year IT student and proficient in the MERN stack and Spring framework, with a strong focus on data structures and algorithms. Demonstrates a commitment to mastering key technologies and enhancing problem-solving skills. Eager to apply knowledge and drive innovation in a dynamic software development environment.
      </div>
      </div>
      
      </div>
     </>
    );
}
export default Profile;