import { createSlice } from "@reduxjs/toolkit";

 export const Userslice= createSlice({
    name: "userdata",
    initialState: {
        userdata:null
    },
    reducers: {
        login:(state,action)=>
        {
            state.userdata=action.payload;
        },
        logout:(state)=>
        {
            state.userdata=null;
        }
    },
       
})
export const { login,logout} = Userslice.actions
export const sliceuser=(state)=>state.userdata.userdata;
export default Userslice.reducer