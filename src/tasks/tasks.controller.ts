import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { parse } from 'path';

@Controller('/tasks')
export class TasksController {
   
    constructor(private tasksService: TasksService) {}

    // creando rutas
             @Get('')
            getAllTasks() {
             return this.tasksService.getTasks();
            }
            // ver una tarea usarndo param para add un valor de manera dinamico a la url para mostrarlo como una respuesta
            
            @Get('/:id')
            getTask(@Param('id') id: string) {
             return this.tasksService.getTask(parseInt(id));
            }
    // PETICIONES HTTP
            @Post('')
            createTask(@Body() task: any) {
                return this.tasksService.createTask(task);
            }
            
            @Put('')
            updateTasks() {
                return this.tasksService.updateTask();
            }
            @Delete('')
            deleteTask() {
                return this.tasksService.deleteTask();
            }
            @Patch('')
            updateTask() {
                return this.tasksService.UpdateTaskStatus();
            }
  
}