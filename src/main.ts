import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //유효성 검사
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  //CORS 활성화
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
