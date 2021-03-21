import { Injectable } from '@angular/core';
import { TodoModel } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoServicesService {
  private todos: TodoModel[] = [];

  constructor() {}

  addTodo(todo: TodoModel): void {
    console.log(this.todos);
    this.todos.push(todo);
  }

  getTodo(): TodoModel[] {
    console.log(this.todos);

    return this.todos;
  }

  update(todo: TodoModel): void {
    this.todos[todo.id].done = !this.todos[todo.id].done;
  }
}
