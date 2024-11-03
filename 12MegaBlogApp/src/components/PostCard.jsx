import React from 'react'
import {Link} from "react-router-dom"
import appwriteService from "../appwrite/database.js"
const PostCard = ({post}) => {
  console.log(post.featuredImage)
  return (
   <Link to={`/post/${post.$id}`}>
    <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          <p>image:{console.log(appwriteService.getFilePreview(post.featuredImage))}</p>
          <img src={appwriteService.getFilePreview(post.featuredImage)} alt="img" />
        </div>
        <h2 className="text-xl font-bold">{post.title}</h2>
    </div>
   </Link>
  )
}

export default PostCard
