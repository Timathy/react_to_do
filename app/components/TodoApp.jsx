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
          text: text
        }
      ]
    });
  },

  handleSearch: function (searchValue, checkedValue) {
    console.log(searchValue, checkedValue);
    this.setState({
      searchValue: searchValue.toLowerCase(),
      checkedValue: checkedValue
    });
  },

  render: function () {
    var { todos } = this.state;

    return (
      <div className="row">
        <div className="columns small-centered large-4 medium-6 small-12">
          <SearchToDoFilter onSearch={this.handleSearch}/>
          <ToDoList todos={todos}/>
          <AddToDo onInputValue={this.handleAddToDo}/>
        </div>
      </div>
    );
  }
});

module.exports = ToDoApp;
