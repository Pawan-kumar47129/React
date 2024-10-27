import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

const Todos = () => {
  const todos=useSelector((state)=>state.todos);
  return (
    <div className='flex flex-col justify-center items-center gap-2 w-full'>
      {todos.map((todo)=>(
        <TodoItem key={todo.id} todo={todo}/>
      ))}
    </div>
  )
}

export default Todos
