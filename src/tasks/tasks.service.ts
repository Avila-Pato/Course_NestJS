import { Injectable } from '@nestjs/common';


export interface User {
    id: number;
    name: string;
    age: number;
}
@Injectable()
export class TasksService {
    getTasks(): User {
           return {
            id: 1,
            name: 'pedro',
            age: 23,
           }
    }
    createTask() {
        return 'creando tarea';
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