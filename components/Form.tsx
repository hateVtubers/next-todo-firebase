import type { TaskInDatabase } from "../interfaces/Task";
import type { ContextTask } from "../interfaces/ContextTask";
import { FormEvent, useContext, useState, useEffect } from "react";
import { TaskContext } from "../context/taskContext";
// @ts-ignore
import uniqid from "uniqid";
import { notificationAdd } from "./Notification";
import { Toaster } from "react-hot-toast";

type Edit = {
  edit: TaskInDatabase | string
  setEditting: Function
}

type UserTask = {
  title: string,
  body: string,
}

export const Form = ({ edit, setEditting }: Edit) => {
  const [userTask, setUserTask] = useState({ title: "", body: "" }) as [UserTask, Function];
  const { readUserTask, writeUserTask, updateTask } = useContext(TaskContext) as ContextTask;
  useEffect(() => {
    // @ts-ignore
    edit ? setUserTask({ title: edit.title, body: edit.body }) : setUserTask({ title: "", body: "" });
  }, [edit])

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // @ts-ignore
    const [t, b] = event.target as { value: string }[];
    const date = new Date();
    if (edit) {
      // @ts-ignore
      const update = { title: t.value, body: b.value, date: date.toLocaleDateString(), id: edit.id };
      updateTask(update);
      notificationAdd("#2FF9CC", "task update complete!");
      setEditting(null);
    } else {
      const newTask = {
        title: t.value,
        body: b.value,
        id: uniqid(`${t.value}-`),
        date: `${date.toLocaleDateString()}`,
        complete: false,
      }
      writeUserTask(newTask);
      notificationAdd("#2FF9CC", "Successfully added task!");
      readUserTask(newTask.id);
    }
  };
  return (
    <>
      <form
        className="flex items-center flex-col gap-3"
        onSubmit={handleSubmit}
      >
        <h2 className="uppercase dark:text-bright-turquoise-500 text-blue-zodiac-500 text-lg transition-colors">
          {edit ? "editting task" : "creating task"}
        </h2>
        <input
          className="outline-none rounded dark:bg-bright-turquoise-500 bg-blue-zodiac-500 w-11/12 px-2 py-1 text-sm dark:text-blue-zodiac-400 text-bright-turquoise-400 dark:placeholder-blue-zodiac-400 placeholder-bright-turquoise-400 transition-colors"
          placeholder={edit ? "update a task title" : "create a new task title"}
          onChange={(e) => {
            setUserTask({ ...userTask, title: e.target.value });
          }}
          value={userTask.title}
          required
        />
        <textarea
          cols={30}
          rows={5}
          className="outline-none rounded dark:bg-bright-turquoise-500 bg-blue-zodiac-500 w-11/12 px-2 py-1 text-sm dark:text-blue-zodiac-400 text-bright-turquoise-400 dark:placeholder-blue-zodiac-400 placeholder-bright-turquoise-400 transition-colors"
          placeholder={edit ? "update a task body" : "create a new task body"}
          onChange={(e) => {
            setUserTask({ ...userTask, body: e.target.value });
          }}
          value={userTask.body}
          required
        />
        <button className="dark:bg-bright-turquoise-500 bg-blue-zodiac-500 dark:text-blue-zodiac-400 text-bright-turquoise-400 px-7 py-1 rounded active:ring-4 active:ring-bright-turquoise-700 transition-all">
          {edit ? "Update" : "Add"}
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
