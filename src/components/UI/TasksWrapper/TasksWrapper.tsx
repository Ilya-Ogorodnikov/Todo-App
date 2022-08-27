import { FC } from 'react';
import { ITaskWrapperProps } from '../../../models';
import './style.scss';

const TasksWrapper:FC<ITaskWrapperProps> = ({ children }) => (
  <div className="tasks-wrapper">
    {children}
  </div>
)

export default TasksWrapper