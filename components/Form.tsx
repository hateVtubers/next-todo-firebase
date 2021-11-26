import type { Task } from "../interfaces/Task";
import type { ContextTask } from "../interfaces/ContextTask";
import { FormEvent, useRef, useContext } from "react";
import { TaskContext } from "../context/taskContext";
// @ts-ignore
import uniqid from "uniqid";
import { notificationAdd } from "./Notification";
import { Toaster } from "react-hot-toast";

export const Form = () => {
  const task = useRef({
    title: null,
    body: null,
    id: null,
    date: null,
    complete: null,
  }) as { current: Task };
  const { readUserTask, writeUserTask } = useContext(
    TaskContext
  ) as ContextTask;

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // @ts-ignore
    const [t, b] = event.target as { value: string }[];
    const date = new Date();

    task.current.title = t.value;
    task.current.body = b.value;
    task.current.id = uniqid(`${t.value}-`);
    task.current.date = `${date.toLocaleDateString()}`;
    task.current.complete = false;

    writeUserTask(task.current);
    readUserTask(task.current.id);
    notificationAdd("#2FF9CC", "Successfully added task!");
  };

  return (
    <>
      <form
        className="flex items-center flex-col gap-3"
        onSubmit={handleSubmit}
      >
        <h2 className="uppercase dark:text-bright-turquoise-500 text-blue-zodiac-500 text-lg transition-colors">
          add task
        </h2>
        <input
          className="outline-none rounded dark:bg-bright-turquoise-500 bg-blue-zodiac-500 w-11/12 px-2 py-1 text-sm dark:text-blue-zodiac-400 text-bright-turquoise-400 dark:placeholder-blue-zodiac-400 placeholder-bright-turquoise-400 transition-colors"
          placeholder="Task title"
          required
        />
        <textarea
          cols={30}
          rows={5}
          className="outline-none rounded dark:bg-bright-turquoise-500 bg-blue-zodiac-500 w-11/12 px-2 py-1 text-sm dark:text-blue-zodiac-400 text-bright-turquoise-400 dark:placeholder-blue-zodiac-400 placeholder-bright-turquoise-400 transition-colors"
          placeholder="Task body"
          required
        />
        <button className="dark:bg-bright-turquoise-500 bg-blue-zodiac-500 dark:text-blue-zodiac-400 text-bright-turquoise-400 px-7 py-1 rounded active:ring-4 active:ring-bright-turquoise-700 transition-all">
          Add
        </button>
      </form>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{ top: "6.4rem", right: "1.25rem" }}
      />
    </>
  );
};
