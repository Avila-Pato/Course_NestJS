import { Controller, Get } from '@nestjs/common';

@Controller('')
export class HelloController {
    
    @Get('/hello')
    index() {
        return 'Hola mundo 2';
    }
}
