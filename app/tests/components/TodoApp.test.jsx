const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const jQuery = require('jQuery');
const TestUtils = require('react-addons-test-utils');

// Load component
const ToDoApp = require('ToDoApp');

describe('TodoApp', function () {
  it('should exist', () => {
    expect(ToDoApp).toExist();
  });

  describe('render', function () {
    it('should add todo to the todos state on handleAddToDo', () => {
      var toDoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
      var stringTest = 'some string';
      toDoApp.setState({
        todos: []
      });

      toDoApp.handleAddToDo(stringTest);
      expect(toDoApp.state.todos[0].text).toBe(stringTest);
    });
  });
});
