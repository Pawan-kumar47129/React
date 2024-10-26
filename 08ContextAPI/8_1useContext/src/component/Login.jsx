import React, { useContext, useState } from "react";
import userContext from "../context/userContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //
  const {user,setUser}=useContext(userContext);// here we access data from userContext
  const handleSubmit=(e)=>{
    e.preventDefault();
    setUser({username,password});
    setPassword("");
    setUsername("");
  }
  return (
    <div>
      <label htmlFor="username">usename:</label>
      <input
        type="text"
        value={username}
        id="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /> <b />
      <label htmlFor="password">password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /> <b />
      <input type="submit" onClick={handleSubmit} value="submit" />
    </div>
  );
};

export default Login;
