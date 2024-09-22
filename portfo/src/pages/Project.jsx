import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Addcomp from "../components/Addcomp";
import Projectcard from "../components/Projectcard";
const Project=()=>{
    const [projectData,setProjectdata]=useState(null)
    const fetchdata=async()=>
    {
        try{
            const {data}=await getprojects();
            setProjectdata(data)
        }
        catch(error)
        {
            console.warn("error");
        }

    }
console.log(projectData)
    useEffect(()=>
    {
        fetchdata();
    },[])
    return(
        <>
        <Navbar />
        <div className="w-[100rem] h-[100vh] bg-[#080b50] text-white flex justify-center items-start py-6">
        <div className="w-[8%] h-[9%] bg-white text-[#080b40] flex ">
        <Addcomp />
        </div>
        {
            projectData.map((data,index)=> 
            (
                <Projectcard title={data.title} desc={data.desc} pid={index} key={index} cover={data.cover} id={data.id} />
            ))
        }
        </div>
        </>
    )
};
export default Project;