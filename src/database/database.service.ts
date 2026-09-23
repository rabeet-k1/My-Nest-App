import {
  Injectable,
  OnModuleInit,
  OnApplicationShutdown,
} from '@nestjs/common';

@Injectable()
export class DatabaseService
  implements OnModuleInit, OnApplicationShutdown
{
  private isConnected = false;

  onModuleInit() {
    this.isConnected = true;
    console.log('Database connected successfully');
  }

  onApplicationShutdown(signal?: string) {
    this.isConnected = false;
    console.log(
      `Database disconnected successfully due to app shutdown. Signal ${signal}`,
    );
  }

  getStatus() {
    return this.isConnected
      ? 'Database is connected'
      : 'Database is disconnected';
  }
}
