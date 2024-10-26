import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts/TodoContext";
import TodoForm from "./component/TodoForm";
import TodoItem from "./component/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(),todo:todo, completed: false },
    ]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, todo: todo } : prevTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id != id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length>0){
      setTodos(todos);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="flex flex-col justify-center items-center gap-2">
      <h1 className="text-slate-200 text-3xl font-semibold">All Todos</h1>
      <TodoForm/>
      {todos.map((todo)=>(
        <TodoItem key={todo.id}todo={todo}/>
      ))}
      </div>
    </TodoProvider>
  );
}

export default App;
