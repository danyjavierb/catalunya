import React from "react";

const Todo = (props) => {
  return (
    <li>
      <input checked={false} type="checkbox" />
      <label>Pay Bills</label>
      <input type="text" />
      <button className="edit">Edit</button>
      <button className="delete">Delete</button>
    </li>
  );
};

export default Todo;
