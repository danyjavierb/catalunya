import React, { Fragment } from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";

const TodoList = ({ todos }) => {
  // const renderTodos = (todos) => {
  //   return todos.map((todo) => {
  //     return <Todo></Todo>;
  //   });
  // };

  return (
    <Fragment>
      <h3>Todo</h3>
      <ul id="incomplete-tasks">
        {
          // usar esto renderTodos(props.todos)
          todos.map((todo) => {
            return <Todo todo={todo}></Todo>;
          })
        }
      </ul>
    </Fragment>
  );
};

export default TodoList;
