import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { Task, TaskForm } from "../types";

type TaskState = {
  tasks: Task[];
  taskId: Task["id"];
  addTask: (data: TaskForm) => void;
  selectTask: (data: Task["id"]) => void;
  removeTask: (id: Task["id"]) => void;
  updateTask: (data: TaskForm) => void;
};

export const useTaskStore = create<TaskState>()(
  devtools((set) => ({
    tasks: [],
    taskId: "",

    addTask: (data) => {
      const newTask = { ...data, id: uuidv4(), status: false };

      set((state) => ({
        tasks: [...state.tasks, newTask],
      }));
    },
    selectTask: (data) => {
      set(() => ({
        taskId: data,
      }));
    },
    removeTask: (id) => {
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
      }));
    },
    updateTask: (data) => {
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === state.taskId ? { id: state.taskId, ...data } : task
        ),
        taskId: "",
      }));
    },
  }))
);
