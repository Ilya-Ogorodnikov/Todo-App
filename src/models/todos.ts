import { ITask } from '.'

export interface ITodosState {
  allTodos: ITask[],
  isLoading: boolean
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