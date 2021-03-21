import { Action, createReducer, on } from '@ngrx/store';
import { TodoModel } from 'src/app/models/todo.model';
import { loadAddTodos } from '../action/add-todo.actions';
import {
  loadGetTodoss,
  loadGetTodossSuccess,
} from '../action/get-todos.actions';
import { loadUpdateTodos } from '../action/update-todo.actions';

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
  on(loadAddTodos, (state) => ({ ...state })),
  on(loadUpdateTodos, (state) => ({ ...state }))
);
