import Navbar from "../components/Navbar";
import akpic from "../assets/img/akpro.jpg";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-auto flex flex-col justify-center items-center bg-[#f8f8f8] pt-10">
        {/* Profile Picture Section */}
        <div className="w-full flex justify-center items-center mb-6">
          <div className="w-[20rem] h-[20rem] flex justify-center items-center">
            <img
              src={akpic}
              alt="Akash"
              className="w-[18rem] h-[18rem] object-cover rounded-full border-4 border-black"
            />
          </div>
        </div>

        {/* Name Section */}
        <div className="w-full text-center mb-4">
          <h1 className="text-5xl font-bold text-zinc-900">
            HI, I AM AKASH!
          </h1>
        </div>

        {/* Bio Section */}
        <div className="w-[60%] text-center text-xl font-medium leading-relaxed text-zinc-700">
          <p>
            I'm currently pursuing my third year as an IT student, and I'm
            proficient in the MERN stack and Spring framework. With a strong
            focus on data structures and algorithms, I demonstrate a commitment
            to mastering key technologies and enhancing problem-solving skills.
            Eager to apply my knowledge and drive innovation in a dynamic
            software development environment.
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
