import Pro from '../assets/img/akash.jpg';
const Profile=()=>{
    return(
     <>
     <div className="w-full h-[35rem] flex flex-row justify-center items-center">
      <div className="w-3/5 h-[35rem] bg-[#b4dae9] text-white flex flex-col justify-center items-center border-r-2 border-black gap-3">
       <div className="w-[29rem] h-20 bg-[#f8f8f8] text-black flex flex-col justify-center items-center font-bold rounded-md ">HI HELLO THIS IS AKASH A</div>
      <div className="w-[40rem] h-40 bg-[#f8f8f8] text-black font-bold flex flex-col justify-center items-center rounded-md">
        hellos
      </div>
      </div>
      <div className="w-2/5 h-[35rem] flex justify-center items-center bg-[#b4dae9] font-bold">
      <img src={Pro} className="items-center " alt="AKASH" />
      </div>
      </div>
     </>
    );
}
export default Profile;