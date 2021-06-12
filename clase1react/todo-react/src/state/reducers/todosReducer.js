// function counterReducer(state = 0, action) {
//     switch (action.type) {
//       case "INCREMENT":
//         return state + action.number;
//       case "DECREMENT":
//         return state - action.number;
//       default:
//         return state;
//     }
//   }

export function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), title: action.title, completed: false },
      ];
    default:
      return state;
  }
}
