import type { TaskState, Action } from "../interfaces/taskState";

const reducer = ( state: TaskState, { type, payload }: Action) => {
  switch (type) {
    case "ADD_TASK_ID":
      return {
        ...state,
        tasks: [...state.tasks, payload],
      }

    default:
      break;
  }
};

export default reducer;
