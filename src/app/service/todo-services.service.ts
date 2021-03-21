import { Injectable } from '@angular/core';
import { TodoModel } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoServicesService {
  private todos: TodoModel[] = [
    {
      id: 0,
      title: 'asdad',
      desc: 'asdadad',
      done: false,
      dueDate: new Date(),
    },
  ];

  constructor() {}

  addTodo(todo: TodoModel): void {
    // This is Immutable way to add data to array
    this.todos = [...this.todos, todo];
    console.log(this.todos);
  }

  getTodo(): TodoModel[] {
    return this.todos;
  }

  update(todo: TodoModel): void {
    this.todos = this.todos.map((t) => {
      let val: TodoModel;
      if (t.id === todo.id) {
        val = { ...t, done: !t.done };
      } else {
        val = t;
      }
      return val;
    });
  }
}
