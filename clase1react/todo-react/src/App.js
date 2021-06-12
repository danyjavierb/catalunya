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

  const addTodo = (title) => {
    setTodos([...todos, { id: todos.length + 1, title, completed: false }]);
  };

  const completeTodo = (index) => {
    const newTodosState = [...todos];
    newTodosState[index].completed = !newTodosState[index].completed;
    setTodos(newTodosState);
  };
  const editTodo = (indentifier, title) => {};

  const deleteTodo = (indentifier) => {};

  return (
    <div className="container">
      <CreateTodoForm addTodo={addTodo}></CreateTodoForm>
      <TodoList completeTodo={completeTodo} todos={todos}></TodoList>
    </div>
  );
}

export default App;
