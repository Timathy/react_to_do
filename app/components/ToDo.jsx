const React = require('react');

const ToDo = React.createClass({
  render: function () {
    var { id, text } = this.props;

    return (
      <div>
        {id}. {text}
      </div>
    );
  }
});

module.exports = ToDo;
