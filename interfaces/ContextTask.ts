import type { TaskState } from "./taskState";

export interface ContextTask {
  state: TaskState,
  writeUserTask: Function,
  readUserTask: Function,
  removeTask: Function,
}
