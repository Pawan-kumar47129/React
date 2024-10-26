
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/themeContext.js'
import Card from './component/Card.jsx';
import ThemeBtn from './component/ThemeBtn.jsx';
function App() {
  const [themeMode,setThemeMode]=useState("light");
  const lightTheme=()=>{
    console.log(themeMode)
    setThemeMode("light");
  }
  const darkTheme=()=>{
    console.log(themeMode)
    setThemeMode("dark");
  }
  // change theme in dom
  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark");
    document.querySelector("html").classList.add(themeMode);
  },[themeMode])
  return(
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}
    >
      <div className='w-screen h-screen flex justify-center items-center dark:bg-black bg-gray-700'>
        <div className='dark:bg-black bg-yellow-500 w-[30rem] h-[30rem] flex flex-col justify-center items-center'>
          <ThemeBtn/>
          <Card/>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
