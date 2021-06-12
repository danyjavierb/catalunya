import React, { Fragment } from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";

const TodoList = ({ todos, completeTodo }) => {
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
          todos.map((todo, index) => {
            return (
              <Todo
                index={index}
                completeTodo={completeTodo}
                todo={todo}
                key={index}
              ></Todo>
            );
          })
        }
      </ul>
      <h3>Completed</h3>
      <ul id="completed-tasks">{}</ul>
    </Fragment>
  );
};

export default TodoList;
