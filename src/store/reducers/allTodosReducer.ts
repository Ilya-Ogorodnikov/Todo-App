import { ITask } from "../../models"

export interface ITodosState {
  allTodos: ITask[],
  isLoading: boolean
}

const initialState: ITodosState = {
  allTodos: [],
  isLoading: false
}

export enum AllTodosActionTypes {
  FETCH_ALL_TODOS_LOADING = 'FETCH_ALL_TODOS_LOADING',
  FETCH_ALL_TODOS_SUCCESS = 'FETCH_ALL_TODOS_SUCCESS',
  COMPLETED_ONE_TODO = 'COMPLETED_ONE_TODO',
  DELETE_ONE_TODO = 'DELETE_ONE_TODO',
  CHANGE_ONE_TODO = 'CHANGE_ONE_TODO'
}

interface IFetchTodosLoading {
  type: AllTodosActionTypes.FETCH_ALL_TODOS_LOADING,
  payload: boolean
}

interface IFetchTodosSuccess {
  type: AllTodosActionTypes.FETCH_ALL_TODOS_SUCCESS,
  payload: ITask[]
}

interface ICompletedOneTodo {
  type: AllTodosActionTypes.COMPLETED_ONE_TODO,
  payload: ITask
}

interface IDeleteOneTodo {
  type: AllTodosActionTypes.DELETE_ONE_TODO,
  payload: number
}

interface IChangeOneTodo {
  type: AllTodosActionTypes.CHANGE_ONE_TODO,
  payload: ITask
};

export type IAllTodosAction = IFetchTodosLoading
  | IFetchTodosSuccess
  | ICompletedOneTodo
  | IDeleteOneTodo
  | IChangeOneTodo

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