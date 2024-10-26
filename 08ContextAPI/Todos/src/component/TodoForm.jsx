import React, { useState } from "react";
import useTodos from "../contexts/TodoContext.js";
const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodos();
  const add = (e) => {
    e.preventDefault()
    if(!todo) return;
    addTodo(todo);
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={add}
       className="flex justify-center gap-3 mb-3">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter new todos"
          className="bg-green-100 w-[15rem] h-[2rem] rounded-md px-2 outline-green-300"
        />
        <button type="submit" 
        className="bg-pink-300 px-2 rounded-md hover:bg-pink-700">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
