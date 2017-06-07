// const jQuery = require('jQuery');

module.exports = {
  setTodos: function (todos) {
    if (Array.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },

  getTodos: function () {
    var fetchTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(fetchTodos);
    } catch (e) {
      console.log('Error message:', e.message);
    }

    return Array.isArray(todos) ? todos : [];
  }
};
