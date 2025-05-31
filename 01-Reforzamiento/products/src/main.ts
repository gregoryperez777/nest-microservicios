import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { envs } from 'config/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api') // Coloca un prefijo global a todas las peticiones de los endpoints 

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,  // Remueve todo lo que no está incluído en los DTOs
      forbidNonWhitelisted: true, // Retorna bad request si hay propiedades en el objeto no requeridas
    })
  );

  await app.listen(envs.port ?? 3000);
  console.log(`Server running on Port: ${envs.port}`)
}
bootstrap();
