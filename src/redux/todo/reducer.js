import { ADD_TODO } from "./actions";

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat({ name: action.payload }),
      };
  
    default:
      return state;
  }
};

export default reducer;
