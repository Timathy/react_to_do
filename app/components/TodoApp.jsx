const React = require('react');
const uuid = require('node-uuid');
const ToDoList = require('ToDoList');
const AddToDo = require('AddToDo');
const SearchToDoFilter = require('SearchToDoFilter');
const TodoAPI = require('TodoAPI');

const ToDoApp = React.createClass({
  getInitialState: function () {
    return {
      searchValue: '',
      checkedValue: false,

      todos: TodoAPI.getTodos(),
    };
  },

  componentDidUpdate: function () {
    var { todos } = this.state;
    TodoAPI.setTodos(todos);
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
