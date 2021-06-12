import React, { useRef, useState } from "react";
import "./Todo.css";

const Todo = ({ todo, completeTodo, editTodo, deleteTodo }) => {
  const completeTodoHanlder = (ev) => {
    completeTodo(todo.id);
  };

  const [disabledInput, setDisableInput] = useState(true);
  const [inputValue, setInputValue] = useState(todo.title);

  const inputTitleRef = useRef();

  const enableEdit = () => {
    setDisableInput(false);
  };

  const updateTodo = (ev) => {
    if (ev.key == "Enter") {
      updateTodoHandler();
    }
  };

  const updateTodoHandler = (ev) => {
    const newTitle = inputTitleRef.current.value;
    editTodo(todo.id, newTitle);
    setDisableInput(true);
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
        disabled={disabledInput}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
      ></input>
      <button onClick={enableEdit} className="edit">
        Edit
      </button>
      {!disabledInput && (
        <button onClick={updateTodoHandler} className="edit">
          Guardar
        </button>
      )}
      <button
        onClick={() => {
          deleteTodo(todo.id);
        }}
        className="delete"
      >
        Delete
      </button>
    </li>
  );
};

export default Todo;
