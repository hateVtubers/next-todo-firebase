import { FormEvent, useRef } from "react";
import type { Task } from "../interfaces/Task";
import { useDatabase } from "../database/useDatabase";
// @ts-ignore
import uniqid from "uniqid";

export const Form = () => {
  const task = useRef({ title: null, body: null, id: null }) as { current: Task };
  const { writeUserTask, readUserTask } = useDatabase();
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // @ts-ignore
    const [t, b] = event.target as { value: string }[];

    task.current.title = t.value as string;
    task.current.body = b.value as string;
    task.current.id = uniqid(`${t.value}-`) as string;
    writeUserTask(task.current);
    readUserTask(task.current.id);
  };
  return (
    <form className="flex items-center flex-col gap-3" onSubmit={handleSubmit}>
      <h2 className="uppercase text-bright-turquoise-500 text-lg">add task</h2>
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
  );
};
