import axios from 'axios';
import { URL } from '../constants';
import { ITask } from '../models';

export const getTodos = () => axios.get<ITask[]>(`${URL}users/1/todos`);