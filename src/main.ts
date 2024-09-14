import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);

  // agreando usevaliation anivel global 
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }))
  const config = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('cats')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

app.enableCors()

await app.listen(process.env.PORT || 3000);
}
bootstrap();