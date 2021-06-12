export function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), title: action.title, completed: false },
      ];
    case "COMPLETE_TODO":
      const newState = [...state];
      const index = newState.findIndex((todo) => todo.id == action.id);
      newState[index].completed = !newState[index].completed;
      return newState;
    case "DELETE_TODO":
      return state.filter((todo) => todo.id != action.id);
    default:
      return state;
  }
}
