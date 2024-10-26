
import { useState } from 'react'
import './App.css'
import userContext from './context/userContext';
import Login from './component/Login';
import Profile from './component/Profile';
function App() {
  const[user,setUser]=useState();
  return(
    <userContext.Provider value={{user,setUser}}>
      <Login/>
      <Profile/>
    </userContext.Provider>
    
  )
}

export default App
