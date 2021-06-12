import React from "react";

const Todo = ({ todo, completeTodo, index }) => {
  const completeTodoHanlder = (ev) => {
    completeTodo(index);
  };

  return (
    <li>
      <input onClick={completeTodoHanlder} type="checkbox" />
      <label>{todo.title}</label>
      <input type="text" />
      <button className="edit">Edit</button>
      <button className="delete">Delete</button>
    </li>
  );
};

export default Todo;
