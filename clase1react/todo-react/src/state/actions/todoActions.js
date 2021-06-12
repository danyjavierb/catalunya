export const addTodoAction = (title) => {
  return {
    type: "ADD_TODO",
    // title: title,
    title,
  };
};
