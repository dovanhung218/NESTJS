import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      autoLoadEntities: true,
      synchronize:true,
      database:path.resolve(__dirname,'..','db.sqlite')
    }),
    TodoModule
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}

