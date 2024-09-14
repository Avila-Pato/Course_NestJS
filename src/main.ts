import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsePipes, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);

  // agreando usevaliation anivel global 
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }))
}
bootstrap();
