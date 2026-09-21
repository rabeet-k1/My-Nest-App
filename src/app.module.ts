import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { DatabaseService } from './database/database.service';
import { EmployeeModule } from './employee/employee.module';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { ProductService } from './product/product.service';
import { StudentModule } from './student/student.module';

@Module({
  imports: [EmployeeModule, CategoryModule, StudentModule],
  providers: [AppService, ProductService, DatabaseService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
