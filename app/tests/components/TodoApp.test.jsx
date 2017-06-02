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
});
