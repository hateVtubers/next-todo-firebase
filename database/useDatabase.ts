import { set, ref, get, child, remove } from "@firebase/database";
import { useEffect, useReducer } from "react";
import { db } from "../firebase.config";
import reducer from "./reducer";
import type { Task } from "../interfaces/Task";
import type { TaskState, StateDispatch } from "../interfaces/taskState";
import type { TaskInDatabase } from "../interfaces/Task";
import type { ContextTask } from "../interfaces/ContextTask";

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
    remove(child(dbRef, `tasks/${id.id}`));
    dispatch({ type: "REMOVE_TASK_ID", payload: id });
  };

  useEffect(() => {
    getUserTask();
    // eslint-disable-next-line
  }, []);

  return {
    writeUserTask,
    readUserTask,
    removeTask,
    state,
  };
};
