import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { EmployeeModule } from './employee/employee.module';
import { ProductService } from './product/product.service';
import { StudentModule } from './student/student.module';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';

@Module({
  imports: [EmployeeModule, CategoryModule, StudentModule],
  providers: [AppService, ProductService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
