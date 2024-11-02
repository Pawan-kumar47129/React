import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/database";
import { useSelector } from "react-redux";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const {userData,status}=useSelector((state)=>state.auth);
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  if (!status) {
    return (
      <div className="flex py-8 mt-4 text-center ">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full ">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read Posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }
};

export default Home;
