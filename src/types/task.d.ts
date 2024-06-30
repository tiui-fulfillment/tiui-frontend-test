export interface Task {
    id : number
    task : string
    date : string
    isComplete : boolean
}

export interface InputTask {
    text: string
    error: string
}

export type FilterType = 'Todos' | 'Completadas' | 'Pendientes';

