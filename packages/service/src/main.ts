import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {RequestInterceptor} from './request/request.interceptor'
import {Cors} from './lib/cors/cors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new RequestInterceptor())
  new Cors(app)
  await app.listen(3001);
}
bootstrap();
