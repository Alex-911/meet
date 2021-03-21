import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoModel } from './models/todo.model';
import { TodoServicesService } from './service/todo-services.service';
import { loadGetTodoss } from './store/action/get-todos.actions';
import { loadUpdateTodos } from './store/action/update-todo.actions';
import { State } from './store/reducer/reducer.reducer';
import { getTodos } from './store/selector/todo-selector.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public todoForm!: FormGroup;

  public todos!: Observable<TodoModel[]>;

  constructor(private fb: FormBuilder, private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(loadGetTodoss());

    this.todos = this.store.select(getTodos);

    this.todoForm = this.fb.group({
      title: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      completed: [false],
      dueDate: [''],
    });
  }

  submit() {
    const title: string = this.todoForm.get('title')?.value as string;
    const desc: string = this.todoForm.get('desc')?.value as string;
    const completed: boolean = this.todoForm.get('completed')?.value as boolean;
    const dueDate: Date = this.todoForm.get('dueDate')?.value as Date;

    let id!: number;

    this.todos.subscribe((todos) => (id = todos.length));

    const newTodo: TodoModel = {
      id: id,
      title,
      desc,
      dueDate,
      done: completed,
    };

    this;

    this.store.dispatch(loadGetTodoss());
  }

  updateTodo(todo: TodoModel) {
    this.store.dispatch(loadUpdateTodos({ data: todo }));
    this.store.dispatch(loadGetTodoss());
  }
}
