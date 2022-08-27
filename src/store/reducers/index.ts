import { combineReducers } from 'redux';
import { allTodosReducer } from './allTodosReducer';

export const rootReducer = combineReducers({
  allTodos: allTodosReducer
});

export type RootState = ReturnType<typeof rootReducer>;