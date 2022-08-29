import { FC, useEffect } from 'react';
import {
  OneTask,
  Preloader,
  TasksWrapper
} from '..';
import { useActions, useTypedSelector } from '../../hooks';

const OpenedTasks: FC = () => {
  const { allTodos, isLoading } = useTypedSelector(state => state.allTodos);
  const { fetchAllTodos } = useActions();

  useEffect(() => {
    const opened = true;
    fetchAllTodos(opened);
  }, []);

  if (isLoading) {
    return (
      <div className="all-tasks__wrapper">
        <Preloader />
      </div>
    )
  };

  return (
    <div className="all-tasks__wrapper">
      <TasksWrapper>
        {
          allTodos?.map(task =>
            <OneTask
              key={task.id}
              task={task}
            />
          )
        }
      </TasksWrapper>
    </div>
  )
}

export default OpenedTasks