import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { TodoServicesService } from 'src/app/service/todo-services.service';
import { loadAddTodos, loadAddTodosSuccess } from '../action/add-todo.actions';

@Injectable()
export class AddTodoEffects {
  constructor(
    private actions$: Actions,
    private todoService: TodoServicesService
  ) {}

  public addTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAddTodos),
      mergeMap((action) => {
        this.todoService.addTodo(action.data);
        return of(loadAddTodosSuccess());
      })
    );
  });
}
