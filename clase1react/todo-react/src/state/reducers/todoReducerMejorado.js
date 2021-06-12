import { createSlice } from "@reduxjs/toolkit";

const initialTodos = [];

const todosSlice = createSlice({
  name: "todos",
  initialTodos,

  reducers: {
    addTodo: (state, action) => {
      return [
        ...state,
        { id: Date.now(), title: action.title, completed: false },
      ];
    },
    completeTodo: (state, action) => {
      const newState = [...state];
      const index = newState.findIndex((todo) => todo.id == action.id);
      newState[index].completed = !newState[index].completed;
      return newState;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id != action.id);
    },
    editTodo: (state, action) => {
      const newEditTodoState = [...state];
      newEditTodoState[
        newEditTodoState.findIndex((todo) => todo.id == action.id)
      ].title = action.title;
      return newEditTodoState;
    },
  },
});

export const { editTodo, deleteTodo, completeTodo, addTodo } =
  todosSlice.actions;

export const todos = todosSlice.reducer;
