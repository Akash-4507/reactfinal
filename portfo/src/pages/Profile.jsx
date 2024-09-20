import Navbar from "../components/Navbar";

// import Pro from '../assets/img/akash.jpg';
const Profile=()=>{
    return(
     <>
     <Navbar />
     <div className="w-full h-[35rem] flex flex-row justify-center items-center">
      <div className="w-5/5 h-[35rem] bg-[#f8f8f8] flex flex-col justify-center items-center border-b-2 border-black gap-3">
       <div className="w-[100rem] h-[25rem] bg-[#f8f8f8] text-black flex flex-col justify-center items-center font-bold rounded-md gap-3">HI HELLO THIS IS AKASH A</div>
       <div className="w-[70rem] h-[10rem] bg-[#f8f8f8] text-black flex flex-col justify-center items-center font-bold rounded-md gap-3">HI HELLO THIS IS AKASH A</div>
      <div className="w-[80rem] h-[40rem] bg-[#f8f8f8] text-black font-bold flex flex-col justify-center items-center rounded-md gap-3">
        hellos
      </div>
      </div>
      
      </div>
     </>
    );
}
export default Profile;