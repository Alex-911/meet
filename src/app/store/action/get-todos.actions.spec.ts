import * as fromGetTodos from './get-todos.actions';

describe('loadGetTodoss', () => {
  it('should return an action', () => {
    expect(fromGetTodos.loadGetTodoss().type).toBe('[GetTodos] Load GetTodoss');
  });
});
