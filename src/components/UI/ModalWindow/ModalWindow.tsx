import { FC } from 'react';
import { IModalWindowProps } from '../../../models';
import './style.scss';

const ModalWindow: FC<IModalWindowProps> = ({
  children,
  title,
  setOpenModal,
  modifyTask,
  titleForButtonChange
}) => (
  <div className="modal-wrapper">
    <div className="modal">
      <div className="modal__title">{title}</div>
      <div className="modal__children">{children}</div>
      <div className="modal__buttons-group">
        <button
          className="modal__cancel"
          type="button"
          onClick={setOpenModal}
        >
          Отмена
        </button>
        {
          modifyTask &&
          <button
            className="modal__save"
            type="button"
            onClick={modifyTask}
          >
            {titleForButtonChange}
          </button>
        }
      </div>
    </div>
  </div>
);

export default ModalWindow