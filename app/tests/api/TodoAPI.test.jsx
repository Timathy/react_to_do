const expect = require('expect');

// Load component
const TodoAPI = require('TodoAPI');

describe('TodoAPI', function () {
  beforeEach(function () {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', function () {
    it('should check for valid todos array', () => {
      var todos = [
        {
          id: 1,
          text: 'lorem ipsum',
          completed: false
        }
      ];

      TodoAPI.setTodos(todos);

      var actual = JSON.parse(localStorage.getItem('todos'));

      expect(actual).toEqual(todos);
    });

    it('should not set todos for invalid todos array', () => {
      var errorTodos = { id: 24 };
      TodoAPI.setTodos(errorTodos);
      var getTodosArr = localStorage.getItem('todos');

      expect(getTodosArr).toBe(null);
    });
  });

  describe('getTodos', function () {
    it('should return empty array for invalid localStorage data', () => {
      var todos = [];
      TodoAPI.getTodos(todos);
      var getTodosArr = localStorage.getItem('todos');

      expect(getTodosArr).toBe(null);
    });

    it('should return an valid localStorage data', () => {
      var todos = [
        {
          id: 1,
          text: 'lorem ipsum',
          completed: false
        }
      ];

      var storeTodos = localStorage.setItem('todos', JSON.stringify(todos));
      var loadTodos = localStorage.getItem('todos');
      var parseTodos = JSON.parse(loadTodos);

      expect(parseTodos).toEqual(todos);
    });
  });
});
