import { Controller, Get } from '@nestjs/common';

@Controller({})
export class TasksController {

    // creando rutas
             @Get('/tasks')
            getAllTasks() {
        return 'Obteniendo las tareas';
    }
    // 2 ruta
    @Get('/')
    getHome() {
        return 'Hola mundo';
    }
}