import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CreateTodoForm from "./components/CreateTodoForm/CreateTodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="container">
      <CreateTodoForm></CreateTodoForm>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
