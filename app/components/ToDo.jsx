const React = require('react');

const ToDo = React.createClass({
  handleCheck: function () {
    var { id, completed } = this.props;
    var checkState = this.refs.checkState.checked;

    if (checkState === false) {
      completed = checkState;
    } else if (checkState === true) {
      completed = checkState;
    }

    this.props.onToggle(id, checkState);
  },

  render: function () {
    var { id, text, completed } = this.props;

    return (
      <div onChange={this.handleCheck}>
        <label>
          {text}
          &nbsp;
          <input type="checkbox" ref="checkState" defaultChecked={completed}/>
          complete task
        </label>
      </div>
    );
  }
});

module.exports = ToDo;
