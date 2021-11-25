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
        <h2 className="uppercase text-bright-turquoise-500 text-lg">
          add task
        </h2>
        <input
          className="outline-none rounded bg-bright-turquoise-500 w-11/12 px-2 py-1 text-sm text-blue-zodiac-400 placeholder-blue-zodiac-400"
          placeholder="Task title"
          required
        />
        <textarea
          cols={30}
          rows={5}
          className="outline-none rounded bg-bright-turquoise-500 w-11/12 px-2 py-1 text-sm text-blue-zodiac-400 placeholder-blue-zodiac-400"
          placeholder="Task body"
          required
        />
        <button className="bg-bright-turquoise-500 text-blue-zodiac-400 px-7 py-1 rounded">
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
