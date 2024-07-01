

export type Category = {
    id: string;
    name: string;
    icon: string;
}

export type Todo = {
    id: string;
    title: string;
    category: string;
    description: string;
    expirationDate: any | null
    completed: boolean;
}

export type DraftTodo = Omit<Todo, 'id'>