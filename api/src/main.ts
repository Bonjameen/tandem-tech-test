import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);

  app.use(cors('127.0.0.1:8080'));

  await app.listen(3000);
}
bootstrap();
