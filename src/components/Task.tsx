import { FC, ReactNode } from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  children?: ReactNode;
  completeTask(taskId: number): void;
}

const Task: FC<Props> = ({ task, completeTask }) => {
  return (
    <div className="flex px-4 py-2 my-2 rounded-md items-center bg-gray-300">
      <h3 className="text-xl flex-1">{task.taskTitle}</h3>
      <h3 className="text-xl flex-1">{task.deadLine}</h3>
      <button
        onClick={() => completeTask(task.id)}
        className="px-2 bg-red-500 text-white rounded-md text-xl "
      >
        X
      </button>
    </div>
  );
};

export default Task;
