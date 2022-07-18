import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";
const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div>
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
        
      </div>
    </div>
  );
};

export default App;
