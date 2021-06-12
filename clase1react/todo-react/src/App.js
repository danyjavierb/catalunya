import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CreateTodoForm from "./components/CreateTodoForm/CreateTodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [idTodoSeq, setIdTodoSeq] = useState(0);
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
    setTodos([...todos, { id: Date.now(), title, completed: false }]);
  };

  const completeTodo = (id) => {
    const newTodosState = [...todos];

    //#1
    // newTodosState.forEach((todo) => {
    //   if (todo.id === id) {
    //     todo.completed = !todo.completed;
    //   }
    // });
    const indexTodo = newTodosState.findIndex((todo) => todo.id === id);
    newTodosState[indexTodo].completed = !newTodosState[indexTodo].completed;

    setTodos(newTodosState);
  };
  const editTodo = (id, newTitle) => {
    const newTodosState = [];

    todos.forEach((todo) => {
      if (todo.id == id) {
        todo.title = newTitle;
      }

      newTodosState.push(todo);
    });

    setTodos(newTodosState);
  };

  const deleteTodo = (id) => {
    // todos.forEach((todo) => {
    //   if (todo.id != id) {
    //     newTodosState.push(todo);
    //   }
    // });
    const newTodosState = todos.filter((todo) => todo.id != id);

    setTodos(newTodosState);
  };

  return (
    <div className="container">
      <CreateTodoForm addTodo={addTodo}></CreateTodoForm>
      <TodoList
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        completeTodo={completeTodo}
        todos={todos}
      ></TodoList>
    </div>
  );
}

export default App;
