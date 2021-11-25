import type { ContextTask } from "../interfaces/ContextTask";
import { createContext, ReactNode } from "react";
import { useDatabase } from "../database/useDatabase";

// @ts-ignore
export const TaskContext = createContext();

export const TaskContextProvider = ({ children }: { children: ReactNode }) => {
  const databaseHook: ContextTask = useDatabase();
  return (
    <TaskContext.Provider value={databaseHook}>{children}</TaskContext.Provider>
  );
};
