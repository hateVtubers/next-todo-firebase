export interface Task {
  title: string | null,
  body: string | null,
  id: string | null,
  date: string | null,
}

export interface TaskInDatabase {
  body: string,
  title: string,
  id: string,
  date: string,
}
