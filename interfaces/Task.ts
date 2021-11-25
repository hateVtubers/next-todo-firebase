export interface Task {
  title: string | null,
  body: string | null,
  id: string | null
}

export interface TaskInDatabase {
  body: string,
  title: string,
  id: string,
}