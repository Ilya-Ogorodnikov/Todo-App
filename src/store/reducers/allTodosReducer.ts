import {
  AllTodosActionTypes,
  IAllTodosAction,
  ITodosState
} from '../../models/todos';

const initialState: ITodosState = {
  allTodos: [],
  isLoading: false
};

export const allTodosReducer = (state = initialState, action: IAllTodosAction): ITodosState => {
  switch(action.type) {
    case AllTodosActionTypes.FETCH_ALL_TODOS_LOADING:
      return { ...state, isLoading: action.payload };
    case AllTodosActionTypes.FETCH_ALL_TODOS_SUCCESS:
      return { allTodos: action.payload, isLoading: false };
    case AllTodosActionTypes.COMPLETED_ONE_TODO:
      return { ...state, allTodos: [...state.allTodos.map(item => {
        const newItem = { ...item };
        if (newItem.id === action.payload.id) {
          newItem.completed = !action.payload.completed
        };
        return newItem;
      })]};
    case AllTodosActionTypes.DELETE_ONE_TODO:
      return { ...state, allTodos: [...state.allTodos.filter(item => item.id !== action.payload)] };
    case AllTodosActionTypes.CHANGE_ONE_TODO:
      return { ... state, allTodos: [...state.allTodos.map(item => {
        const newItem = {...item}
        if (newItem.id === action.payload.id) {
          newItem.title = action.payload.title;
        };
        return newItem;
      })] };
    default:
      return state;
  };
};