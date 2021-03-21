import { Action, createReducer, on } from '@ngrx/store';
import { TodoModel } from 'src/app/models/todo.model';
import { loadAddTodos, loadAddTodosSuccess } from '../action/add-todo.actions';
import {
  loadGetTodoss,
  loadGetTodossSuccess,
} from '../action/get-todos.actions';
import {
  loadUpdateTodos,
  loadUpdateTodosSuccess,
} from '../action/update-todo.actions';

export const reducerFeatureKey = 'reducer';

export interface State {
  todos: TodoModel[];
  loading: boolean;
}

export const initialState: State = {
  todos: [],
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(loadGetTodoss, (state) => ({ ...state, loading: true })),
  on(loadGetTodossSuccess, (state, action) => ({
    ...state,
    todos: action.data,
    loading: false,
  })),
  on(loadAddTodos, (state) => ({ ...state, loading: true })),
  on(loadAddTodosSuccess, (state) => ({ ...state, loading: false })),
  on(loadUpdateTodos, (state) => ({ ...state, loading: true })),
  on(loadUpdateTodosSuccess, (state) => ({ ...state, loading: false }))
);
