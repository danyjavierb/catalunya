import React, { useRef, useState } from "react";
import "./Todo.css";

const Todo = ({ todo, completeTodo }) => {
  const completeTodoHanlder = (ev) => {
    completeTodo(todo.id);
  };

  const [enableInput, setEnableInput] = useState(false);

  const inputTitleRef = useRef();

  const enableEdit = () => {
    inputTitleRef.current.disabled = false;
    setEnableInput(true);
  };

  const updateTodo = (ev) => {
    if (ev.key == "Enter") {
      console.log(todo.id, inputTitleRef.current.value);
    }
  };

  return (
    <li>
      <input
        checked={todo.completed}
        onClick={completeTodoHanlder}
        type="checkbox"
      />
      <input
        onKeyPress={updateTodo}
        ref={inputTitleRef}
        className="todoInput"
        disabled={true}
        value={todo.title}
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
      ></input>
      <button onClick={enableEdit} className="edit">
        Edit
      </button>
      {enableInput && (
        <button onClick={enableEdit} className="edit">
          Guardar
        </button>
      )}
      <button className="delete">Delete</button>
    </li>
  );
};

export default Todo;
