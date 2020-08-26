import { createStore } from  'redux';
import todo from './todo/reducer';

const store = createStore(todo)

export default store;
