const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const jQuery = require('jQuery');
const TestUtils = require('react-addons-test-utils');

// Load component
const SearchToDoFilter = require('SearchToDoFilter');

describe('SearchToDoFilter', function () {
  it('should exist', () => {
    expect(SearchToDoFilter).toExist();
  });

  it('should check for search input value', () => {
    var spy = expect.createSpy();
    var searchToDoFilter = TestUtils.renderIntoDocument(<SearchToDoFilter onSearch={spy}/>);

    var stringTest = 'test';
    var searchVal = searchToDoFilter.refs.searchTodo;
    searchVal.value = stringTest;
    TestUtils.Simulate.change(searchVal);
    TestUtils.Simulate.keyDown(searchVal, { key: 'Enter', keyCode: 13, which: 13 });

    expect(spy).toHaveBeenCalledWith(stringTest, false);
  });

  it('should check if checkbox value is true', () => {
    var spy = expect.createSpy();
    var searchToDoFilter = TestUtils.renderIntoDocument(<SearchToDoFilter onSearch={spy}/>);

    var checkedVal = searchToDoFilter.refs.checkCompleted;
    checkedVal.checked = true;
    TestUtils.Simulate.change(checkedVal);

    expect(spy).toHaveBeenCalledWith('', true);
  });
});
