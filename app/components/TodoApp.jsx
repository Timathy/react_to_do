const React = require('react');
const ToDoList = require('ToDoList');
const AddToDo = require('AddToDo');

const ToDoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Buy a juice'
        },

        {
          id: 2,
          text: 'Add media queries to TimerCounter'
        },

        {
          id: 3,
          text: 'Watch the Complete Java Masterclass tomorrow'
        }
      ]
    };
  },

  handleAddToDo: function (text) {
    console.log('new todo:', text);
  },

  render: function () {
    var { todos } = this.state;

    return (
      <div className="row">
        <div className="columns small-centered large-4 medium-6 small-12">
          <ToDoList todos={todos}/>
          <AddToDo onInputValue={this.handleAddToDo}/>
        </div>
      </div>
    );
  }
});

module.exports = ToDoApp;
