import { createAction, props } from '@ngrx/store';
import { TodoModel } from 'src/app/models/todo.model';

export const loadGetTodoss = createAction('[GetTodos] Load GetTodoss');

export const loadGetTodossSuccess = createAction(
  '[GetTodos] Load GetTodoss Success',
  props<{ data: TodoModel[] }>()
);

export const loadGetTodossFailure = createAction(
  '[GetTodos] Load GetTodoss Failure',
  props<{ error: any }>()
);
