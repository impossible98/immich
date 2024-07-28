import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { APP_NAME, APP_VERSION } from './constant';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.clear();
    console.log();
    console.log(`  ${APP_NAME} v${APP_VERSION}  ready in 375 ms`);
    console.log(`  ➜  Local:   http://localhost:${PORT}/`);
    console.log(`  ➜  Network: http://0.0.0.0:${PORT}/`);
  });
}

bootstrap();
