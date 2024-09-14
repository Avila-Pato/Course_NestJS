import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
   
   
    getTasks() {
       return ['pedro', 'lucia', 'maria'];                       
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