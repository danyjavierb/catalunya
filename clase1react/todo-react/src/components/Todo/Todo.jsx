import React from "react";

const Todo = ({ todo }) => {
  return (
    <li>
      <input checked={false} type="checkbox" />
      <label>{todo.title}</label>
      <input type="text" />
      <button className="edit">Edit</button>
      <button className="delete">Delete</button>
    </li>
  );
};

export default Todo;
