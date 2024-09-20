import Navbar from "../components/Navbar";
import akpic from "../assets/img/akpro.jpg"

// import Pro from '../assets/img/akash.jpg';
const Profile=()=>{
    return(
     <>
     <Navbar />
     <div className="w-full h-[30rem] flex flex-row justify-center items-center ">
      <div className="w-5/5 h-[35rem] bg-[#f8f8f8] flex flex-col justify-center items-center border-b-2 border-black ">
       <div className="w-[100rem] h-[25rem] bg-[#f8f8f8] text-black flex flex-col justify-center items-center font-bold rounded-md ">
        <img src={akpic} alt="akash" className=" justify-center items-center rounded-full"/>
       </div>
       <div className="w-[70rem] h-[8rem] bg-[#f8f8f8] text-black flex flex-col justify-center items-center text-4xl font-bold rounded-md ">
        HI, I AM AKASH!
        </div>
      <div className="w-[80rem] h-[30rem] bg-[#f8f8f8] text-black font-bold flex flex-col justify-center items-center rounded-md">
      I'm currently pursuing Third-year IT student and proficient in the MERN stack and Spring framework, with a strong focus on data structures and algorithms. Demonstrates a commitment to mastering key technologies and enhancing problem-solving skills. Eager to apply knowledge and drive innovation in a dynamic software development environment.
      </div>
      </div>
      
      </div>
     </>
    );
}
export default Profile;