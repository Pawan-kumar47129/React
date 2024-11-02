import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
let a=1;
const AuthLayout = ({children,authentication=true}) => {
    const[loader,setLoader]=useState(true)
    const navigate=useNavigate()
    const authStatus=useSelector((state)=>state.auth.status);
    console.log(authStatus," ",a++);
    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }else if(!authentication && authStatus!==authentication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus,authentication,navigate])
  return (
    loader?<h1>Loading...</h1>:<div>{children}</div>
  )
}

export default AuthLayout
