import { useState } from "react";
import "./App.css";
function App() {
  let [counter,setCounter]=useState(15)
  const increaseValue=()=>{
      //counter++; we can write this minnor
      if(counter>=25) return;
      setCounter(counter+1);
  }
  const decreaseValue=()=>{
    //counter--;we can write this minnor
    if(counter==0) return ;
    setCounter(counter-1);
  }
  return (
    <>
      <h1>Pawan kumar</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={increaseValue}>Add Value {counter}</button>
      <br/>
      <button onClick={decreaseValue}>remove Value {counter}</button>
    </>
  );
}

export default App;
