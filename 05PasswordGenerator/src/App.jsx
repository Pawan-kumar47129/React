import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [allowNumber, setAllowNumber] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    // this Hook is used for optimizing it basically store in cash memory
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowNumber) str += "0123456789";
    if (allowChar) str += "!@#$%^&*?/";
    for (let i = 1; i <= length; i++) {
      let idx = Math.floor(Math.random() * str.length);
      pass += str[idx];
    }
    setPassword(pass);
  }, [length, allowNumber, allowChar, setPassword]);

  useEffect(() => {
    // useEffect run first we page is load and then anychanges in the given array value
    passwordGenerator();
  }, [length, allowNumber, allowChar, passwordGenerator]);

  //for copy  useRef hook
  const passwordRef = useRef(null); //useref is take referance
  const copyPasswordToClipBord = () => {
    //we can use useCallBack hook for otimize
    passwordRef.current?.select(); // we select the password then highlight password
    // passwordRef.current?.setSelectionRange(0,2) //for select in range
    window.navigator.clipboard.writeText(password);
  };
  return (
    <>
      <div className=" w-full max-w-md text-orange-600 bg-gray-700 mx-auto px-4 py-2 text-left rounded-xl">
        <h2 className="text-white text-center text-xl my-4">
          Password Generator
        </h2>
        <div className="flex overflow-hidden w-full items-center">
          <input
            className=" bg-white text-orange-500 w-full px-3 py-1 rounded-tl-lg rounded-bl-lg mb-2 outline-none text-xl font-medium"
            value={password}
            readOnly
            placeholder="Password"
            ref={passwordRef} //useRef
          />
          <button
            onClick={copyPasswordToClipBord}
            className=" bg-blue-800 px-4 py-1 text-center mb-2 rounded-tr-lg rounded-br-lg text-xl outline-none font-medium "
          >
            copy
          </button>
        </div>
        <div className="">
          <div className="flex overflow-hidden w-full items-center gap-x-2">
            <input
              onChange={(e) => {
                setLength(e.target.value);
              }}
              type="range"
              min={6}
              max={40}
              value={length}
              className=" outline-none h-4 cursor-pointer "
            />
            <label>Length:{length}</label>
            <input
              onChange={() => {
                setAllowNumber((prevValue) => !prevValue);
              }}
              type="checkbox"
              defaultChecked={allowNumber}
              id="Num"
            />
            <label htmlFor="Num">Number</label>
            <input
              type="checkbox"
              defaultChecked={allowChar}
              id="char"
              onChange={() => setAllowChar((prevValue) => !prevValue)}
            />
            <label htmlFor="char">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
