import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any) {
    const val = parseInt(value, 10);  // Convierte el valor en número entero base 10
    if (isNaN(val)) {
      // Si el valor no es un número válido, lanza una excepción de solicitud incorrecta
      throw new BadRequestException('El valor proporcionado no es un número válido');
    }
    return val;  // Si es válido, devuelve el número
  }
}
