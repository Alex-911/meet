import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { TodoServicesService } from 'src/app/service/todo-services.service';
import {
  loadUpdateTodos,
  loadUpdateTodosSuccess,
} from '../action/update-todo.actions';

@Injectable()
export class UpdateTodoEffects {
  constructor(
    private actions$: Actions,
    private todoService: TodoServicesService
  ) {}

  public getTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUpdateTodos),
      mergeMap((action) => {
        this.todoService.update(action.data);
        return of(loadUpdateTodosSuccess());
      })
    );
  });
}
