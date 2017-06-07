const React = require('react');
const ToDoList = require('ToDoList');
const AddToDo = require('AddToDo');
const SearchToDoFilter = require('SearchToDoFilter');
const uuid = require('node-uuid');

const ToDoApp = React.createClass({
  getInitialState: function () {
    return {
      searchValue: '',
      checkedValue: false,

      todos: [
        {
          id: 1,
          text: 'Buy a juice',
          completed: true
        },

        {
          id: 2,
          text: 'Add media queries to TimerCounter',
          completed: false
        },

        {
          id: 3,
          text: 'Watch the Complete Java Masterclass tomorrow',
          completed: false
        }
      ],
    };
  },

  handleAddToDo: function (text) {
    var { todos } = this.state;

    this.setState({
      todos: [
        ...todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  },

  handleToggle: function (id, checkState) {
    var { todos } = this.state;

    var updatedTodos = todos.map( (todo) => {
      if (todo.id === id) {
        todo.completed = checkState;
      }

      return todo;
    });

    this.setState({ todos: updatedTodos });
  },

  handleSearch: function (searchValue, checkedValue) {
    this.setState({
      searchValue: searchValue.toLowerCase(),
      checkedValue: checkedValue
    });
  },

  render: function () {
    var { todos, completed } = this.state;

    return (
      <div className="row">
        <div className="columns small-centered large-4 medium-6 small-12">
          <SearchToDoFilter onSearch={this.handleSearch}/>
          <ToDoList todos={todos} onToggle={this.handleToggle}/>
          <AddToDo onInputValue={this.handleAddToDo}/>
        </div>
      </div>
    );
  }
});

module.exports = ToDoApp;
