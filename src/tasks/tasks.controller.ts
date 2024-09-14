import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller({})
export class TasksController {
    tasksService: TasksService;


    constructor(private taskService: TasksService) {
       
    }

    // creando rutas
             @Get('/tasks')
            getAllTasks() {
             return this.tasksService.getTasks();

            }
    // 2 ruta
  
}