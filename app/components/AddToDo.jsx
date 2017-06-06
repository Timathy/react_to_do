const React = require('react');

const AddToDo = React.createClass({
  handleSubmit: function (event) {
    event.preventDefault();

    var addItem = this.refs.addItemToDo.value;

    var errFunc = () => {
      console.log('Please enter a valid task');
      this.refs.addItemToDo.focus();
    };

    if (addItem !== '' || addItem.length > 0) {
      this.refs.addItemToDo.value = '';
      this.props.onInputValue(addItem);
    } else {
      errFunc();
    }
  },

  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.handleSubmit}>
          <div>
            <input type="text" ref="addItemToDo" placeholder="Enter a task you want/need to do"/>
          </div>

          <div>
            <button className="hollow button primary expanded">Start</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = AddToDo;
