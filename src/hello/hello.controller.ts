import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ParseIntPipe } from '../hello/parse-int.pipe'; // Importa el Pipe personalizado

@Controller('status')
export class StatusController {

    // Ruta para el estado 200 OK
    @Get('/ok/:input')
    getOk(@Param('input', ParseIntPipe) input: number, @Res() response: Response) {
        response.status(HttpStatus.OK).json({
            message: 'Operación exitosa',
            input: input,
            squared: input * input,
            statusCode: HttpStatus.OK
        });
    }

    // Ruta para el estado 201 Created
    @Get('/created/:input')
    getCreated(@Param('input', ParseIntPipe) input: number, @Res() response: Response) {
        response.status(HttpStatus.CREATED).json({
            message: 'Recurso creado correctamente',
            input: input,
            squared: input * input,
            statusCode: HttpStatus.CREATED
        });
    }

    // Ruta para el estado 400 Bad Request
    @Get('/bad-request/:input')
    getBadRequest(@Param('input', ParseIntPipe) input: number, @Res() response: Response) {
        response.status(HttpStatus.BAD_REQUEST).json({
            message: 'Error en la solicitud',
            input: input,
            squared: input * input,
            statusCode: HttpStatus.BAD_REQUEST
        });
    }

    // Ruta para el estado 401 Unauthorized
    @Get('/unauthorized/:input')
    getUnauthorized(@Param('input', ParseIntPipe) input: number, @Res() response: Response) {
        response.status(HttpStatus.UNAUTHORIZED).json({
            message: 'No autorizado',
            input: input,
            squared: input * input,
            statusCode: HttpStatus.UNAUTHORIZED
        });
    }

    // Ruta para el estado 403 Forbidden
    @Get('/forbidden/:input')
    getForbidden(@Param('input', ParseIntPipe) input: number, @Res() response: Response) {
        response.status(HttpStatus.FORBIDDEN).json({
            message: 'Prohibido',
            input: input,
            squared: input * input,
            statusCode: HttpStatus.FORBIDDEN
        });
    }

    // Ruta para el estado 404 Not Found
    @Get('/not-found/:input')
    getNotFound(@Param('input', ParseIntPipe) input: number, @Res() response: Response) {
        response.status(HttpStatus.NOT_FOUND).json({
            message: 'Recurso no encontrado',
            input: input,
            squared: input * input,
            statusCode: HttpStatus.NOT_FOUND
        });
    }

    // Ruta para el estado 500 Internal Server Error
    @Get('/internal-error/:input')
    getInternalError(@Param('input', ParseIntPipe) input: number, @Res() response: Response) {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: 'Error interno del servidor',
            input: input,
            squared: input * input,
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR
        });
    }
}
