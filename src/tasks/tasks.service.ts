import { Injectable } from '@nestjs/common';


export interface User {
    id: number;
    name: string;
    age: number;
}
@Injectable()
export class TasksService {
    private tasks = []


    getTasks() {
           return this.tasks;
    }
    createTask(task: any) {
        this.tasks.push(task);
        return task

    }
    updateTask() {
        return 'Actuaizando tarea';
    }
    deleteTask() {
        return 'borrando tarea';
    }
    UpdateTaskStatus() {
        return 'actualizando estado de 1  tarea';
    }
}