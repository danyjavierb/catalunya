import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CreateTodoForm from "./components/CreateTodoForm/CreateTodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "sacar a los perros al parque",
      completed: false,
    },
    {
      id: 2,
      title: "comprar el pan del desayuno",
      completed: false,
    },
  ]);

  return (
    <div className="container">
      <CreateTodoForm></CreateTodoForm>
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
