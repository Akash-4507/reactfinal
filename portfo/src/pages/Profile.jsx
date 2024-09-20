import Navbar from "../components/Navbar";

// import Pro from '../assets/img/akash.jpg';
const Profile=()=>{
    return(
     <>
     <Navbar />
     <div className="w-full h-[30rem] flex flex-row justify-center items-center pt-[2rem]">
      <div className="w-5/5 h-[35rem] bg-[#f8f8f8] flex flex-col justify-center items-center border-b-2 border-black gap-3">
       <div className="w-[100rem] h-[25rem] bg-[#f8f8f8] text-black flex flex-col justify-center items-center font-bold rounded-md gap-3">
        <img src="" alt="akash"/>
       </div>
       <div className="w-[70rem] h-[8rem] bg-[#f8f8f8] text-black flex flex-col justify-center items-center text-4xl font-bold rounded-md gap-3">
        HI, I AM AKASH!
        </div>
      <div className="w-[80rem] h-[30rem] bg-[#f8f8f8] text-black font-bold flex flex-col justify-center items-center rounded-md gap-3">
        hellos
      </div>
      </div>
      
      </div>
     </>
    );
}
export default Profile;