import React, { useContext } from "react";
import userContext from "../context/userContext";

const Profile = () => {
  const { user } = useContext(userContext);
  return (
    user!=null && (
      <div
        style={{
          backgroundColor: "skyblue",
          height: "30rem",
          width: "30rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection:"column",
        }}
      >
        <h1>username:{user.username}</h1>
        <h2>password:{user.password}</h2>
      </div>
    )
  );
};

export default Profile;
