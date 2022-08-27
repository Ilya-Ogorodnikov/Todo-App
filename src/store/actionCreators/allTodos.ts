import { Dispatch } from 'redux';
import axios from 'axios'
import { ITask } from '../../models';
import { AllTodosActionTypes, IAllTodosAction } from '../reducers/allTodosReducer';
import { getTodos } from '../../services/todos-service';

const fetchAllTodos = (opened?: boolean, completed?: boolean) => async (dispatch: Dispatch<IAllTodosAction>) => {
  try {
    dispatch({
      type: AllTodosActionTypes.FETCH_ALL_TODOS_LOADING,
      payload: true
    });

    const getAllTodos = await getTodos();

    if (opened) {
      dispatch({
        type: AllTodosActionTypes.FETCH_ALL_TODOS_SUCCESS,
        payload: getAllTodos.data.filter(item => item.completed !== true)
      });
      return;
    };

    if (completed) {
      dispatch({
        type: AllTodosActionTypes.FETCH_ALL_TODOS_SUCCESS,
        payload: getAllTodos.data.filter(item => item.completed === true)
      });
      return;
    };

    dispatch({
      type: AllTodosActionTypes.FETCH_ALL_TODOS_SUCCESS,
      payload: getAllTodos.data
    });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      alert('Ошибка в получении всех задач');
    };
  };
};

const completedOneTask = (task: ITask) => (dispatch: Dispatch<IAllTodosAction>) => {
  dispatch({
    type: AllTodosActionTypes.COMPLETED_ONE_TODO,
    payload: task
  });
};

const deleteTask = (id: number) => (dispatch: Dispatch<IAllTodosAction>) => {
  dispatch({
    type: AllTodosActionTypes.DELETE_ONE_TODO,
    payload: id
  });
};

const changeTask = (task: ITask, newTitle: string) => (dispatch: Dispatch<IAllTodosAction>) => {
  const newTask = { ...task };
  newTask.title = newTitle;

  dispatch({
    type: AllTodosActionTypes.CHANGE_ONE_TODO,
    payload: newTask
  });
};

export {
  fetchAllTodos,
  completedOneTask,
  deleteTask,
  changeTask
}