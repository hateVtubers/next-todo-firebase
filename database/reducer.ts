import type { TaskState, Action } from "../interfaces/taskState";

const reducer = (state: TaskState, { type, payload }: Action) => {
  switch (type) {
    case "ADD_TASK_ID":
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    case "REMOVE_TASK_ID":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task !== payload),
      };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          payload.id === task.id
            ? {
                ...task,
                title: payload.title,
                body: payload.body,
                date: payload.date,
              }
            : { ...task }
        ),
      };
    default:
      break;
  }
};

export default reducer;
