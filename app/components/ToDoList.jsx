const React = require('react');
const ToDo = require('ToDo');

const ToDoList = React.createClass({
  render: function () {
    var { todos } = this.props;

    var displayTodos = function () {
      // Loop over the list and return a new
      // list with unique id and text
      return todos.map( (todo) => {
        return (
          <ToDo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {displayTodos()}
      </div>
    );
  }
});

module.exports = ToDoList;
