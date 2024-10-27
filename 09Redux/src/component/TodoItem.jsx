import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/Todo/todoSlice";

const TodoItem = ({ todo }) => {
  const [text, setText] = useState(todo.text);
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch();
  const updateHander = (e) => {
    if (isEditable) {
      dispatch(updateTodo({ id: todo.id, text: text }));
      setIsEditable((prev) => !prev);
    } else {
      setIsEditable((prev) => !prev);
    }
  };
  return (
    <div className="flex justify-between bg-sky-600 w-full px-4 rounded-lg box-border">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        readOnly={!isEditable}
        className="bg-transparent w-[15rem] outline-none h-[2rem] text-orange-400 text-xl"
      />
      <div className="flex gap-2">
        <button onClick={updateHander}>{isEditable ? "📁" : "✏️"}</button>
        <button
          onClick={() => {
            dispatch(removeTodo(todo.id));
            console.log(todo.id);
            console.log("clicked");
          }}
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
