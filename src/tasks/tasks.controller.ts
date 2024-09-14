import { Body, Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller({})
export class TasksController {
   
    constructor(private tasksService: TasksService) {}

    // creando rutas
             @Get('/tasks')
            getAllTasks() {
             return this.tasksService.getTasks();

            }
    // PETICIONES HTTP
            @Post('/tasks')
            createTask(@Body() task: any) {
                return this.tasksService.createTask(task);
            }
            
            @Put('/tasks')
            updateTasks() {
                return this.tasksService.updateTask();
            }
            @Delete('/tasks')
            deleteTask() {
                return this.tasksService.deleteTask();
            }
            @Patch('/tasks')
            updateTask() {
                return this.tasksService.UpdateTaskStatus();
            }
  
}