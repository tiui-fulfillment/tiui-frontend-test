import { Task } from '../types/Task';

export const FilterTask = (tasks: Task[], filter: string): Task[] => {
    switch (filter) {
        case 'TO_DO':
            return tasks.filter(task => !task.isDone);
        case 'DONE':
            return tasks.filter(task => task.isDone);
        case 'ALL':
        default:
            return tasks;
    }
};