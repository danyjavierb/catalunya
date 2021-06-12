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
          todos
            .filter((todo) => todo.completed == false)
            .map((todo) => {
              return (
                <Todo
                  index={todo.id}
                  completeTodo={completeTodo}
                  todo={todo}
                  key={todo.id}
                ></Todo>
              );
            })
        }
      </ul>
      <h3>Completed</h3>
      <ul id="completed-tasks">
        {todos
          .filter((todo) => todo.completed == true)
          .map((todo) => {
            return (
              <Todo
                index={todo.id}
                completeTodo={completeTodo}
                todo={todo}
                key={todo.id}
              ></Todo>
            );
          })}
      </ul>
    </Fragment>
  );
};

export default TodoList;
