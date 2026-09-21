import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { CustomerModule } from './customer/customer.module';
import { DatabaseService } from './database/database.service';
import { EmployeeModule } from './employee/employee.module';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { ProductModule } from './product/product.module';
import { ProductService } from './product/product.service';
import { StudentModule } from './student/student.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    CategoryModule,
    CustomerModule,
    ProductModule,
    EmployeeModule,
    ProductModule,
    StudentModule,
    UserModule
  ],
  providers: [AppService, ProductService, DatabaseService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
