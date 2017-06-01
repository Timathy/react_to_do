const React = require('react');
const ToDoList = require('ToDoList');

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

  render: function () {
    var { todos } = this.state;
    
    return (
      <div>
        <ToDoList todos={todos}/>
      </div>
    );
  }
});

module.exports = ToDoApp;
