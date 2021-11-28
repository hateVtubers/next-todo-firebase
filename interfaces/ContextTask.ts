import type { TaskState } from "./taskState";

export type Action = {
  title: string,
  body: string,
  date: string,
  id: string,
};

export interface ContextTask {
  state: TaskState;
  writeUserTask: Function;
  readUserTask: Function;
  removeTask: Function;
  updateTask: ({ title, body, date, id }: Action) => void;
}
