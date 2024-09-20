import Navbar from "../components/Navbar";

// import Pro from '../assets/img/akash.jpg';
const Profile=()=>{
    return(
     <>
     <Navbar />
     <div className="w-full h-[35rem] flex flex-row justify-center items-center">
      <div className="w-5/5 h-[35rem] bg-[rgb(199,201,202)] flex flex-col justify-center items-center border-r-2 border-black gap-3">
       <div className="w-[55rem] h-20 bg-[rgb(199,201,202)] text-black flex flex-col justify-center items-center font-bold rounded-md ">HI HELLO THIS IS AKASH A</div>
      <div className="w-[55rem] h-40 bg-[rgb(199,201,202)] text-black font-bold flex flex-col justify-center items-center rounded-md">
        hellos
      </div>
      </div>
      
      </div>
     </>
    );
}
export default Profile;