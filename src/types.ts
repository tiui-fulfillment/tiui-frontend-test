export type Todo = {
  id: string;
  description: string;
  completed: boolean;
};

export enum ShowState {
  All = "All",
  Completed = "Completed",
  NotCompleted = "Not Completed",
}
