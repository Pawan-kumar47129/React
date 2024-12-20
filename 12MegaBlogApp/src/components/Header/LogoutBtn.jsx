import React from "react";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import {useDispatch} from "react-redux"
const LogoutBtn = () => {
    const dispatch=useDispatch();
    const handleLogout=()=>{
        authService.logout().then((res)=>{
            dispatch(logout())
        }
        ).catch((err)=>{
            console.log(err)
        })
    }
    return <button onClick={handleLogout}
    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">Logout</button>;
};

export default LogoutBtn;
