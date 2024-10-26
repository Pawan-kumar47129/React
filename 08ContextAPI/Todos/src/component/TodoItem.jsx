import React, { useState } from 'react'
import useTodos from '../contexts/TodoContext';

const TodoItem = ({todo}) => {
    const [isTodoEditable,setIsTodoEditable]=useState(false);
    const[todoMgs,setTodoMsg]=useState(todo.todo);
    const {updateTodo,toggleComplete,deleteTodo}=useTodos();

    const editTodo=()=>{
        if(isTodoEditable){
        updateTodo(todo.id,todoMgs);
        setIsTodoEditable(prev=>!prev);
        }
        else{
            setIsTodoEditable(prev=>!prev);
        }
    }
  return (
    <div className={`${todo.completed?"bg-sky-400":"bg-violet-700"} flex justify-between h-[2.3rem] px-3 rounded-xl `}>
      <input type="checkbox" checked={todo.completed}
      onChange={()=>toggleComplete(todo.id)} 
      className='cursor-pointer p-1'/>
      <input type="text" value={todoMgs} onChange={(e)=>setTodoMsg(e.target.value)}
      readOnly={!isTodoEditable}
      className={`h-full outline-none bg-transparent ${todo.completed?" line-through font-medium":""} `}
      /> 
      <div className='flex justify-center'>
      <button onClick={editTodo}
      className='px-3'> {isTodoEditable ? "📁" : "✏️"}</button>
      <button onClick={()=>deleteTodo(todo.id)}> ❌</button>
      </div>
    </div>
  )
}

export default TodoItem
