export const ADD_TODO = 'ADD_TODO';

export const addTodo = (name) => {
  return {
    type: ADD_TODO,
    payload: name,
  };
};