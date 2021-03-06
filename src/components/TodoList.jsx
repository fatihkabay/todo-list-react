import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="all-todo-list">
      {todos.map((todo) => (
        <div className="list-item" key={todo.id}>
          <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
            <FontAwesomeIcon color="#43A047" icon={faCheckCircle} />
          </button>
          <div min="3" className={todo.completed ? "completed-todo todo-text" : "todo-text"}>
            {todo.title}
          </div>
          <div className="button-container">
            <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
              <i className="fa fa-edit" />
              <FontAwesomeIcon color="#29B6F6" icon={faEdit} />
            </button>
            <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
              <i className="fa fa-trash" />
              <FontAwesomeIcon color="#D32F2F" icon={faTrash} />
            </button>
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
