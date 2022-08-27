import { FC, useState } from 'react';
import { ModalWindow } from '..';
import { useActions } from '../../hooks';
import { IEditTaskProps } from '../../models';
import './style.scss';

const EditTask: FC<IEditTaskProps> = ({ task, setOpenModal }) => {
  const [changeTaskText, setChangeTaskText] = useState(task.title);
  const { changeTask } = useActions();

  const handleChangeTask = () => {
    if (changeTaskText.trim() === '') {
      alert('Вы ввели пустую задачу');
      return;
    };

    changeTask(task, changeTaskText);
    setOpenModal(false);
  };

  return (
    <ModalWindow
      setOpenModal={() => setOpenModal(false)}
      titleForButtonChange="Сохранить"
      title={`Изменить задачу № ${task.id}`}
      modifyTask={handleChangeTask}
    >
      <div>
        <input
          className="input-edit"
          value={changeTaskText}
          onChange={(event) => setChangeTaskText(prev => event.target.value)}
        />
      </div>
    </ModalWindow>
  )
}

export default EditTask