import React, { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";
const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    const todosLocalStorage = localStorage.getItem('todos');
    if (todosLocalStorage != null) {
      const cacheTodos = JSON.parse(todosLocalStorage);
      setTodos(cacheTodos);
    } 

  }, []);

  const onChangeTodos = (todos) => {
    const todosStringify = JSON.stringify(todos);
    localStorage.setItem('todos', todosStringify);
    setTodos(todos);
  }

  return (
     <div id="root">
      <div className="container">
        
        <h2 className="title">Todo App</h2>
        <AddTodo
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={onChangeTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <TodoList todos={todos} setTodos={onChangeTodos} setEditTodo={setEditTodo} />
        <div className="footer-button">
          <div className="list-info">You Have {todos.filter((p) => !p.completed).length} Pending Tasks</div>
          <button
            disabled={todos.length < 1}
            onClick={() => onChangeTodos([])}
            className="all-delete-button"
          >
             Clear All
           </button>
         </div>
       </div>
        <span className="created-name">Created by Fatih Kabay</span>
     </div>
  );
};

export default App;
