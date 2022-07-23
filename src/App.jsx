import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";
const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
     <div id="root">
      <div className="container">
        
        <h2 className="title">Todo App</h2>
        <AddTodo
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        <div className="footer-button">
          <div className="list-info">You Have {todos.filter((p) => !p.completed).length} Pending Tasks</div>
          <button
            disabled={todos.length < 1}
            onClick={() => {
              setTodos([]);
            }}
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
