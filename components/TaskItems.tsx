import type { TaskInDatabase } from "../interfaces/Task";
import type { ContextTask } from "../interfaces/ContextTask";
import { TaskContext } from "../context/taskContext";
import { useContext } from "react";
import { notificationAdd } from "./Notification";
import Edit from "./svg/Edit";
import Trash from "./svg/Trash";
import Arrow from "./svg/Arrow";

type TaskText = {
  taskText: TaskInDatabase;
  setEditting: Function;
};

export const TaskItems = ({ taskText, setEditting }: TaskText) => {
  const { removeTask } = useContext(TaskContext) as ContextTask;
  const handleRemove = () => {
    removeTask(taskText);
    notificationAdd("#DC143C", "Successfully remove task!!");
  };
  const handleEdit = () => setEditting(taskText);
  return (
    <div className="dark:bg-bright-turquoise-500 bg-blue-zodiac-500 dark:text-blue-zodiac-500 text-bright-turquoise-500 text-sm flex items-center justify-between p-2 h-12 rounded transition-colors">
      <div className="flex flex-col items-start">
        <h3 className="text-sm text-left">{taskText.title}</h3>
        <span className="text-xs">{taskText.date}</span>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={handleEdit}>
          <Edit />
        </button>
        <button onClick={handleRemove}>
          <Trash />
        </button>
        <button>
          <Arrow />
        </button>
      </div>
    </div>
  );
};
