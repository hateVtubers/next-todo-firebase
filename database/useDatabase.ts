import { set, ref, get, child, remove, update } from "@firebase/database";
import { useEffect, useReducer } from "react";
import { db } from "../firebase.config";
import reducer from "./reducer";
import type { Task } from "../interfaces/Task";
import type { TaskState, StateDispatch } from "../interfaces/taskState";
import type { TaskInDatabase } from "../interfaces/Task";
import type { ContextTask, Action } from "../interfaces/ContextTask";

export const dbRef = ref(db);

export const useDatabase = (): ContextTask => {
  const initialState: TaskState = {
    tasks: [],
  };
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState) as StateDispatch;
  const writeUserTask = (task: Task) => {
    set(ref(db, `tasks/${task.id}`), task);
  };

  const readUserTask = async (id: string) => {
    const getTask = await get(child(dbRef, `tasks/${id}`));
    const res = await getTask.val();
    addTask(res);
  };

  const getUserTask = async () => {
    const getTask = await get(child(dbRef, "tasks"));
    const res = await getTask.val();
    // @ts-ignore
    res ? Object.values(res).forEach((task: TaskInDatabase) => addTask(task)) : null;
  };

  const addTask = (task: TaskInDatabase) => {
    dispatch({ type: "ADD_TASK_ID", payload: task });
  };
  const removeTask = (id: Task) => {
    dispatch({ type: "REMOVE_TASK_ID", payload: id });
    remove(child(dbRef, `tasks/${id.id}`));
  };

  const updateTask = (newTask: Action) => {
    dispatch({ type: "UPDATE_TASK", payload: newTask });
    update(child(dbRef, `tasks/${newTask.id}`), {
      title: newTask.title,
      body: newTask.body,
      date: newTask.date,
    })
  }

  useEffect(() => {
    getUserTask();
    // eslint-disable-next-line
  }, []);

  return {
    writeUserTask,
    readUserTask,
    removeTask,
    updateTask,
    state,
  };
};
