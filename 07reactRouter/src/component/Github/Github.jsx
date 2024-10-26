import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";
export default function GitHub(){
    const data=useLoaderData()
    // const [data,setData]= useState ([]);
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Pawan-kumar47129")
    //     .then((res)=>{
    //         return res.json();
    //     })
    //     .then((data1)=>{
    //         setData(data1)
    //     })
    // })
    return(
        <div className="bg-red-700 w-full h-auto text-center flex flex-col items-center justify-center">Followers:{data.followers}
        <img 
        className="h-32 w-32" 
        src={`${data.avatar_url}`} alt="github picture" />
        </div>
    )
}

// above comment do this 
export async function githubInfoLoader(){
    const data=await fetch("https://api.github.com/users/Pawan-kumar47129");
    return await data.json();
}