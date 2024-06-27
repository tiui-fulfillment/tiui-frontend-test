export type Task = {
  id: string;
  title: string;
  description: string;
  status: boolean
};

export type TaskForm = Omit<Task, "id">;
