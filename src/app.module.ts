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
import { ConfigModule } from '@nestjs/config';
import { EvService } from './ev/ev.service';
import { EvController } from './ev/ev.controller';

@Module({
  imports: [
    CategoryModule,
    CustomerModule,
    ProductModule,
    EmployeeModule,
    ProductModule,
    StudentModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [AppService, ProductService, DatabaseService, EvService],
  controllers: [EvController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
