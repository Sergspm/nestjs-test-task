import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const port = app.get(ConfigService).get<number>('PORT');

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Pages API')
    .setDescription('The Pages API description')
    .setVersion('1.0')
    .addTag('pages')
    .build();

  SwaggerModule.setup(
    'api/swagger',
    app,
    SwaggerModule.createDocument(app, swaggerConfig),
  );

  await app.listen(port);
}
bootstrap();
