const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const jQuery = require('jQuery');
const TestUtils = require('react-addons-test-utils');

// Load component
const ToDo = require('ToDo');

describe('ToDo', function () {
  it('should exist', () => {
    expect(ToDo).toExist();
  });

  it('should call onToggle with props id and checkState on change', () => {
    var data = {
      id: 9,
      text: 'test case',
      completed: true
    };

    var spy = expect.createSpy();
    var toDo = TestUtils.renderIntoDocument(<ToDo {...data} onToggle={spy}/>);

    var changedState = toDo.refs.checkState;
    changedState.checked = data.completed;
    TestUtils.Simulate.change(changedState);

    expect(spy).toHaveBeenCalledWith(9, true);
  });
});
