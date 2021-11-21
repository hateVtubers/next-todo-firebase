import { createContext, ReactNode } from "react";

// @ts-ignore
export const TaskContext = createContext();

export const TaskContextProvider = ({ children }: { children: ReactNode }) => {
  const task: { title: string; description: string; date: string } = {
    title: "uwuwu",
    description: "dads",
    date: "2020",
  };
  return <TaskContext.Provider value={task}>{children}</TaskContext.Provider>;
};
