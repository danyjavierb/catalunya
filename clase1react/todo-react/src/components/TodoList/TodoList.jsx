import React, { Fragment } from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <Fragment>
      <h3>Todo</h3>
      <ul id="incomplete-tasks">
        <Todo></Todo>
        <Todo></Todo>
        <Todo></Todo>
      </ul>
    </Fragment>
  );
};

export default TodoList;
