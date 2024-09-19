import React from 'react'
import { useSelector } from 'react-redux'
import { sliceuser } from '../redux/Userslice'
const Navbar = () => {
    const userdata=useSelector(sliceuser)
  return (
    <div>
      {userdata?.name ||"not available"}
    </div>
  )
}

export default Navbar
