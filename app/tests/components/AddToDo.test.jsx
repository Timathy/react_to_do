const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const jQuery = require('jQuery');
const TestUtils = require('react-addons-test-utils');

// Load component
const AddToDo = require('AddToDo');

describe('AddToDo', function () {
  it('should exist', () => {
    expect(AddToDo).toExist();
  });

  it('should simulate submit click', () => {
    var spy = expect.createSpy();
    var addToDo = TestUtils.renderIntoDocument(<AddToDo onInputValue={spy}/>);
    var $elem = jQuery(ReactDOM.findDOMNode(addToDo));

    addToDo.refs.addItemToDo.value = 'test';
    var testString = 'test';
    TestUtils.Simulate.submit($elem.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(testString);
  });

  it('should throw an error on empty input field', () => {
    var spy = expect.createSpy();
    var addToDo = TestUtils.renderIntoDocument(<AddToDo onInputValue={spy}/>);
    var $elem = jQuery(ReactDOM.findDOMNode(addToDo));

    addToDo.refs.addItemToDo.value = '';
    var emptyString = '';
    TestUtils.Simulate.submit($elem.find('form')[0]);

    expect(spy).toNotHaveBeenCalled(emptyString);
  });
});
