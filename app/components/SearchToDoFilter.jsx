const React = require('react');

const SearchToDoFilter = React.createClass({
  handleChange: function () {

    var searchValue = this.refs.searchTodo.value;
    var checkedValue = this.refs.checkCompleted.checked;

    this.props.onSearch(searchValue, checkedValue);
  },

  render: function () {
    return (
      <div>
        <div>
          <input type="search" ref="searchTodo" placeholder="Search a to do task" onChange={this.handleChange}/>
        </div>

        <div>
          <label>
            <input type="checkbox" ref="checkCompleted" onChange={this.handleChange}/>
            &nbsp; Show finished to do task(s).
          </label>
        </div>
      </div>
    );
  }
});

module.exports = SearchToDoFilter;
