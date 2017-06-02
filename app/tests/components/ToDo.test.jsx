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
});
