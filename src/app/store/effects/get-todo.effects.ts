import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoServicesService } from 'src/app/service/todo-services.service';
import {
  loadGetTodoss,
  loadGetTodossSuccess,
} from '../action/get-todos.actions';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class GetTodoEffects {
  constructor(
    private actions$: Actions,
    private todoService: TodoServicesService
  ) {}

  public getTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadGetTodoss),
      mergeMap((action) => {
        const data = this.todoService.getTodo();
        return of(loadGetTodossSuccess({ data: data }));
      })
    );
  });
}
