import { faPenToSquare, faPlus,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Todoapp = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => (todo.id === id ? { title, id, completed } : todo));
    setTodos(newTodo);
    setEditTodo("");
  };
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onClickAdd = () => {
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <div className="add-todo-container">
      <input
        type="text"
        placeholder= "Add your new todo..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
   

      <button disabled={input.length < 3} onClick={onClickAdd} className="button-add" type="submit">
       {editTodo ? <FontAwesomeIcon color="#fff" icon={faPenToSquare} />   : <FontAwesomeIcon color="#fff" icon={faPlus} />}
      </button>
      </div>

  );
};

export default Todoapp;
