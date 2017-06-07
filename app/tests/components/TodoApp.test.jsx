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

  it('should update completed state', () => {
    var data = {
      id: 14,
      text: 'lorem ipsum',
      completed: false
    };

    var toDoApp = TestUtils.renderIntoDocument(<ToDoApp/>);

    toDoApp.setState({ todos: [data] });

    expect(toDoApp.state.todos[0].completed).toBe(false);

    toDoApp.handleToggle(14, true);
    TestUtils.Simulate.change(toDoApp.state.todos[0].completed);
    expect(toDoApp.state.todos[0].completed).toBe(true);
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
