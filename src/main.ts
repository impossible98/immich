// import third-party modules
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import type { NestExpressApplication } from '@nestjs/platform-express';
// import local modules
import { APP_NAME, APP_VERSION, PORT } from './constant';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  await app.listen(PORT, () => {
    console.clear();
    console.log();
    console.log(`  ${APP_NAME} v${APP_VERSION}  ready in 375 ms`);
    console.log(`  ➜  Local:   http://localhost:${PORT}/`);
    console.log(`  ➜  Network: http://0.0.0.0:${PORT}/`);
  });
}

bootstrap();
