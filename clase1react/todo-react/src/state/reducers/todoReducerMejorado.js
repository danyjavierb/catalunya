import { createSlice } from "@reduxjs/toolkit";

const initialTodos = { todos: [] };

const todosSlice = createSlice({
  name: "todos",
  initialState: [],

  reducers: {
    addTodo: (state, action) => {
      console.log(state);
      state.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
      });
      return state;
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
