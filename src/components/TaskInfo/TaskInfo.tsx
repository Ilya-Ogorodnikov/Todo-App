import { FC } from 'react';
import { ITaskInfoProps } from '../../models';
import { ModalWindow } from '..';
import './style.scss'

const TaskInfo: FC<ITaskInfoProps> = ({ task, setOpenModal }) => (
  <ModalWindow
    title={`Task № ${task.id}`}
    setOpenModal={() => setOpenModal(false)}
  >
    <div className="task-title">{task.title}</div>
  </ModalWindow>
)

export default TaskInfo