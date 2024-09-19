import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import {login,logout } from'../redux/Userslice'

const Login = () => {
    const dispatch=useDispatch();
    const uname=useRef(null)
    const handlelogin=(e)=>
    {
        e.preventDefault()
        dispatch(login({
            name: uname.current.value
        }
    ))
    }
  return (
    <div>
      <form onSubmit={handlelogin} >
        <input type="text" id="name" placeholder="name" ref={uname}/>
        <button type="submit" >Login</button>
      </form>
      <button onClick={()=>dispatch(logout())}>logout</button>
    </div>
  )
}

export default Login
