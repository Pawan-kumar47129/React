import { useParams } from "react-router-dom";
export default function User(){
    const {userId}=useParams();
    return(
    <div className="bg-slate-600 w-full text-xl text-center">UserId: {userId}</div>
    )
}