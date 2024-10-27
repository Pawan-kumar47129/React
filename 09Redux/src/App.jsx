import { useState } from "react";

import "./App.css";
import AddTodo from "./component/AddTodo";
import Todos from "./component/Todos";

function App() {
  return (
    <>
      <div className="flex w-screen justify-center  gap-4 bg-slate-200">
        <div className="flex flex-col justify-center items-center gap-4 bg-yellow-300 w-1/2">
          <h1 className="text-2xl font-medium"
          >Todos</h1>
          <AddTodo />
          <Todos />
        </div>
      </div>
    </>
  );
}

export default App;
