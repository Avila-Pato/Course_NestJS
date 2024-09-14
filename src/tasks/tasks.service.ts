import { Injectable, NotFoundException } from '@nestjs/common';


export interface User {
    name: string;
    age: number;
}
@Injectable()
export class TasksService {
    private tasks = []


    getTasks() {
           return this.tasks;
    }
    // 1 TAREA
    getTask(id: number) {
        const resultFInd = this.tasks.find(task => task.id === id);

        if (!resultFInd) {
            return new NotFoundException(`tarea con la id ${id} no encontrada`);
        }
        return resultFInd;

 }

    createTask(task: any) {
        this.tasks.push({
            ...task, // spread operator
            id: this.tasks.length + 1, // id en suma por creacion de objeto
        });
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