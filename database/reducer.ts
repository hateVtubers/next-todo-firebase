import type { TaskState, Action } from "../interfaces/taskState";

const reducer = (state: TaskState, { type, payload }: Action) => {
  switch (type) {
    case "ADD_TASK_ID":
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    case "REMOVE_TASK_ID":
      // @ts-ignore
      const index = state.tasks.indexOf(payload)
      const newTasks = state.tasks.filter((task, i) => i !== index);
      return {
        ...state,
        tasks: newTasks,
      };
    default:
      break;
  }
};

export default reducer;
