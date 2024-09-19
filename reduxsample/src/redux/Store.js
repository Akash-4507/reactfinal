import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Userslice'

export default configureStore({
    reducer: {
        userdata: userReducer,
    },
})