import React from "react";
import { useState } from "react";
import { addTodo } from "../features/Todo/todoSlice";
import {useDispatch} from "react-redux"
const AddTodo = () => {
  const [todoMsg, setTodoMsg] = useState("");
  const dispatch=useDispatch()
  const addNewTodo=(e)=>{
    e.preventDefault();
    dispatch(addTodo(todoMsg));
    setTodoMsg("");
  }
  return (
   
      <form onSubmit={addNewTodo} className="flex gap-5 justify-center w-full ">
        <input
          type="text"
          placeholder="Enter new todo..."
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          className="w-[20rem] h-[2rem] rounded-lg px-2 bg-purple-500 text-orange-500 text-xl outline-red-500"
        />
        <button type="submit" className="bg-pink-600 px-3 rounded-lg">Add</button>
      </form>
  );
};

export default AddTodo;
