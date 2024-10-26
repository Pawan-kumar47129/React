import { useState } from "react";
function App() {
  const [color,setColor] = useState("grey");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap bottom-14 inset-x-0 justify-center px-4 ">
        <div className="flex flex-wrap gap-3 justify-center px-2 py-2 rounded-2xl bg-green-100">
          <button
            onClick={() => setColor("red")}
            className="px-3 py-2 rounded-2xl shadow-xl outline-none text-white"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button
            onClick={() => setColor("black")}
            className="px-3 py-2 rounded-2xl shadow-xl outline-none text-white"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="px-3 py-2 rounded-2xl shadow-xl outline-none text-white"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            onClick={() => setColor("green")}
            className="px-3 py-2 rounded-2xl shadow-xl outline-none text-white"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => setColor("orange")}
            className="px-3 py-2 rounded-2xl shadow-xl outline-none text-white"
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>
          <button
            onClick={() => setColor("blue")}
            className="px-3 py-2 rounded-2xl shadow-xl outline-none text-white"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => setColor("olive")}
            className="px-3 py-2 rounded-2xl shadow-xl outline-none text-white"
            style={{ backgroundColor: "olive" }}
          >
            olive
          </button>
          <button
            onClick={() => setColor("pink")}
            className="px-3 py-2 rounded-2xl shadow-xl outline-none text-white"
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>
          <button
            onClick={() => setColor("white")}
            className="px-3 py-2 rounded-2xl shadow-xl outline-none text-black"
            style={{ backgroundColor: "white" }}
          >
            white
          </button>
          <button
            onClick={() => setColor("purple")}
            className="px-3 py-2 rounded-2xl shadow-xl outline-none text-white"
            style={{ backgroundColor: "purple" }}
          >
            purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
