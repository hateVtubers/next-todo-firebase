import type { TaskInDatabase } from "../interfaces/Task";
import type { ContextTask } from "../interfaces/ContextTask";
import Link from "next/link";
import Trash from "./svg/Trash";
import { TaskContext } from "../context/taskContext";
import { useContext } from "react";
import { notificationAdd } from "./Notification";

type TaskText = { taskText: TaskInDatabase; taskId: TaskInDatabase };

export const TaskItems = ({ taskText: { title, id, date }, taskId }: TaskText) => {
  const { removeTask } = useContext(TaskContext) as ContextTask;
  const handleRemove = () => {
    removeTask(taskId);
    notificationAdd("#DC143C", "Successfully remove task!!");
  };
  return (
    <div className="dark:bg-bright-turquoise-500 bg-blue-zodiac-500 dark:text-blue-zodiac-500 text-bright-turquoise-500 text-sm flex items-center justify-between p-2 h-12 rounded transition-colors">
      <div className="flex flex-col items-start">
        <Link href={`/task/${id}`}>
          <a>
            <h3 className="text-sm text-left">{title}</h3>
          </a>
        </Link>
        <span className="text-xs">{date}</span>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={handleRemove}>
          <Trash />
        </button>
      </div>
    </div>
  );
};
