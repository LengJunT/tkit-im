import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path'
import { AppModule } from './app.module';
import {RequestInterceptor} from './request/request.interceptor'
import {Cors} from './lib/cors/cors'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalInterceptors(new RequestInterceptor())
  app.useStaticAssets(join(__dirname, '..', 'public'),{
    prefix: '/static/',   //设置虚拟路径
  });
  new Cors(app)
  await app.listen(3001);
}
bootstrap();
