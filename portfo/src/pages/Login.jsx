import React, { useRef, useState } from 'react';

const Login = () => {
    // const [userdata,setUserdata] = useState(
    // {
    //     email:"",
    //     password:""
    // }
    // )
    // const handleChange=(e)=>
    // {
    //     setUserdata({...userdata,[e.target.id]: e.target.value})
    // }

    const emailref=useRef(null);
    const passwordref=useRef(null);
    
    const handleLogin = (e) => {
        e.preventDefault()
        // console.log(userdata)
        // console.log("hello")
        console.log(emailref.current.value , passwordref.current.value)
    }

  return (
    <>
    <div className="h-screen w-screen bg-white flex flex-col justify-center items-center">
                 <div className="w-[40%] h-[50%] flex flex-row justify-center items-center">
                                    <form  onSubmit={handleLogin} className="  w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" >
                                        <input type="email" ref={emailref} id="email" placeholder="email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required />
                                        <input type="password" ref={passwordref} name="" id="password" placeholder="password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required />
                                        {/* <input type="email" name="" id="email" placeholder="email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required onChange={handleChange} />
                                        <input type="email" id="email" placeholder="email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required onChange={handleChange}/>
                                        <input type="password" name="" id="password" placeholder="password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required onChange={handleChange}/>
                                        {/* <input type="email" name="" id="email" placeholder="email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required onChange={handleChange} />
                                        <input type="password" name="" id="password" placeholder="password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required onChange={handleChange} /> */}
                                        <button type="submit" className="bg-green-300 p-3 text-white w-full rounded-sm text-lg font-bold">   Login</button>
                                    </form>
                                </div>
                </div>
        </>
 
  )
}
export default Login;
