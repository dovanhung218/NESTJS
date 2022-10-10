import { Injectable } from '@nestjs/common';
import { TodoDto } from 'src/todo/dto/TodoDto';
import { Todo } from 'src/todo/entities/todo';

@Injectable()
export class TodoMapperService {
  public modelToDto({ id, title, completed }: Todo): TodoDto {
    return new TodoDto({ id, title, completed });
  }
}