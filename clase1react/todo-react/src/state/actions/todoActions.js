export const addTodoAction = (title) => {
  //resultado de una promesa
  return {
    type: "ADD_TODO",
    // title: title,
    title,
  };
};

export const completeTodoAction = (id) => {
  return {
    type: "COMPLETE_TODO",
    id,
  };
};

export const deleteTodoAction = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};

export const editTodoAction = (id, title) => {
  return {
    type: "EDIT_TODO",
    id,
    title,
  };
};
