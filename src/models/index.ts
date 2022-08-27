export interface ITask {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export interface IEditTaskProps {
  task: ITask,
  setOpenModal: (data: boolean) => void
};

export interface ITaskInfoProps {
  task: ITask,
  setOpenModal: (data: boolean) => void
}

export interface IModalWindowProps {
  children: React.ReactNode,
  setOpenModal: () => void,
  title: string,
  titleForButtonChange?: string
  modifyTask?: () => void
}

export interface INavButtonProps {
  title: string,
  path: string
}

export interface ITaskWrapperProps {
  children?: React.ReactNode
};