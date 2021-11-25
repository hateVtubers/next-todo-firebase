import { set, ref, get, child } from "@firebase/database";
import { useEffect, useReducer } from "react";
import { db } from "../firebase.config";
import type { Task } from "../interfaces/Task";
import type { TaskState, StateDispatch } from "../interfaces/taskState";
import type { TaskInDatabase } from "../interfaces/Task";
import reducer from "./reducer";

export const dbRef = ref(db);

export const useDatabase = () => {
  const initialState: TaskState = {
    tasks: [],
  };
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState) as StateDispatch;
  const writeUserTask = ({ title, body, id }: Task) => {
    set(ref(db, `tasks/${id}`), {
      title,
      body,
      id,
    });
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
    res ? Object.values(res).forEach((task: TaskInDatabase) => {
      console.log(task);
      addTask(task);
    }) : null;
  };

  const addTask = (task: TaskInDatabase) => {
    dispatch({ type: "ADD_TASK_ID", payload: task });
  };
  useEffect(() => {
    getUserTask();
    // eslint-disable-next-line
  }, []);

  return {
    writeUserTask,
    readUserTask,
    state,
  };
};
