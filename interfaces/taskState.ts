import { TaskInDatabase } from "./Task";

export type TaskState = {
  tasks: [] | TaskInDatabase[],
}

export type Action = {
  type: string,
  payload: any,
}

export type StateDispatch = [TaskState, (action: Action) => void];
