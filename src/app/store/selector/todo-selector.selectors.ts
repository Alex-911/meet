import { createFeatureSelector, createSelector } from '@ngrx/store';
import { reducerFeatureKey, State } from '../reducer/reducer.reducer';

const todofeatureSelector = createFeatureSelector<State>(reducerFeatureKey);

export const getTodos = createSelector(
  todofeatureSelector,
  (state) => state.todos
);

export const getCompletedTodos = createSelector(
  todofeatureSelector,
  (state) => {
    return state.todos.filter((todo) => todo.done === true);
  }
);

export const getUnCompletedTodos = createSelector(
  todofeatureSelector,
  (state) => {
    return state.todos.filter((todo) => todo.done === false);
  }
);

export const getLoading = createSelector(
  todofeatureSelector,
  (state) => state.loading
);
