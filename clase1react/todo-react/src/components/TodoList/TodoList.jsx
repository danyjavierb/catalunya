import React, { Fragment } from "react";
import Todo from "../Todo/Todo";
import { connect } from "react-redux";
import "./TodoList.css";

const TodoList = ({ todosProp }) => {
  return (
    <Fragment>
      <h3>Todo</h3>
      <ul id="incomplete-tasks">
        {
          // usar esto renderTodos(props.todos)
          todosProp
            .filter((todo) => todo.completed == false)
            .map((todo) => {
              return <Todo index={todo.id} todo={todo} key={todo.id}></Todo>;
            })
        }
      </ul>
      <h3>Completed</h3>
      <ul id="completed-tasks">
        {todosProp
          .filter((todo) => todo.completed == true)
          .map((todo) => {
            return <Todo index={todo.id} todo={todo} key={todo.id}></Todo>;
          })}
      </ul>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    todosProp: state.todos,
  };
};

export default connect(mapStateToProps, null)(TodoList);
