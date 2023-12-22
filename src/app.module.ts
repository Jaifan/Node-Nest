import { Module , NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController, ProductController } from './app.controller';
import { AppService, ProductService } from './app.service';
import { LoggerMiddleware } from './logger.middleware';


@Module({
  imports: [],
  controllers: [AppController, ProductController ],
  providers: [AppService, ProductService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('user');
  }
}
