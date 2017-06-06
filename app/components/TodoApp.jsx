const React = require('react');
const ToDoList = require('ToDoList');
const AddToDo = require('AddToDo');
const SearchToDoFilter = require('SearchToDoFilter');

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
    console.log('new todo:', text);

    var { todos } = this.state;


    // Future reference for updating and setting
    // the ID and text fields
    // todos.push({
    //   id: undefined,
    //   text: text
    // });
    //
    // this.setState({ todos });
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
