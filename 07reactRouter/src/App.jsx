import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Home from './component/Home/Home'
import Footer from './component/Footer/Footer'
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
