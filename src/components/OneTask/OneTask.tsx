import { FC, useState } from 'react';
import { EditTask, TaskInfo } from '..';
import { useActions } from '../../hooks';
import { ITask } from '../../models';
import './style.scss';

const OneTask: FC<{ task: ITask }> = ({ task }) => {
  const { completedOneTask, deleteTask } = useActions();
  const [isOpenModalInfo, setIsOpenModalInfo] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);

  return (
    <>
      <div className={task.completed ? "completed-task" : "one-task"}>
        <div className="one-task__box-content">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => completedOneTask(task)}
          />

          <p
            className="one-task__title"
            onClick={() => setIsOpenModalInfo(prev => !prev)}
          >
            {task.title}
          </p>
        </div>

        <div className="one-task__box-content">
          {
            task.completed ? (
              <button className="one-task__button">
                Удалить
              </button>
            ) : (
              <>
                <button
                  className="one-task__button"
                  onClick={() => setIsOpenModalEdit(prev => !prev)}
                >
                  Редактировать
                </button>

                <button
                  className="one-task__button"
                  onClick={() => deleteTask(task.id)}
                >
                  Удалить
                </button>
              </>
            )
          }
        </div>
      </div>

      {isOpenModalInfo &&
        <TaskInfo
          setOpenModal={setIsOpenModalInfo}
          task={task}
        />
      }

      {isOpenModalEdit &&
        <EditTask 
          setOpenModal={setIsOpenModalEdit}
          task={task}
        />
      }
    </>
  )
}

export default OneTask