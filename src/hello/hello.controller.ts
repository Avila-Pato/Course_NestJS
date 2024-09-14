import { Controller, Get, Req, Res, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
@Controller('status')
export class StatusController {

    @Get('/ok')
    getOk(@Req() request: Request, @Res() response: Response) {
        response.status(HttpStatus.OK).json({
            message: 'Operación exitosa',
            statusCode: HttpStatus.OK
        });
    }

    @Get('/created')
    getCreated(@Req() request: Request, @Res() response: Response) {
        response.status(HttpStatus.CREATED).json({
            message: 'Recurso creado correctamente',
            statusCode: HttpStatus.CREATED
        });
    }

    @Get('/bad-request')
    getBadRequest(@Req() request: Request, @Res() response: Response) {
        response.status(HttpStatus.BAD_REQUEST).json({
            message: 'Error en la solicitud',
            statusCode: HttpStatus.BAD_REQUEST
        });
    }

    @Get('/unauthorized')
    getUnauthorized(@Req() request: Request, @Res() response: Response) {
        response.status(HttpStatus.UNAUTHORIZED).json({
            message: 'No autorizado',
            statusCode: HttpStatus.UNAUTHORIZED
        });
    }

    @Get('/forbidden')
    getForbidden(@Req() request: Request, @Res() response: Response) {
        response.status(HttpStatus.FORBIDDEN).json({
            message: 'Prohibido',
            statusCode: HttpStatus.FORBIDDEN
        });
    }

    @Get('/not-found')
    getNotFound(@Req() request: Request, @Res() response: Response) {
        response.status(HttpStatus.NOT_FOUND).json({
            message: 'Recurso no encontrado',
            statusCode: HttpStatus.NOT_FOUND
        });
    }

    @Get('/internal-error')
    getInternalError(@Req() request: Request, @Res() response: Response) {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: 'Error interno del servidor',
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR
        });
    }
}