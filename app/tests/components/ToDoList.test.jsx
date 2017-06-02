const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const jQuery = require('jQuery');
const TestUtils = require('react-addons-test-utils');

// Load component
const ToDoList = require('ToDoList');
const ToDo = require('ToDo');

describe('TodoList', function () {
  it('should exist', () => {
    expect(ToDoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: 'Test 1'
      },

      {
        id: 2,
        text: 'Test 2'
      },

      {
        id: 3,
        text: 'Test 3'
      }
    ];

    var todoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ToDo);

    expect(todosComponents.length).toBe(todos.length);
  });
});
