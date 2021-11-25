export interface Task {
  title: string | null,
  body: string | null,
  id: string | null,
  date: string | null,
  complete: boolean | null
}

export interface TaskInDatabase {
  body: string,
  title: string,
  id: string,
  date: string,
  complete: boolean
}