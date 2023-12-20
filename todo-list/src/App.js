import React, { Component } from 'react';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleAddTodo = () => {
    if (this.state.newTodo.trim() === '') {
      return;
    }
  
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos,
        { text: prevState.newTodo, completed: false, color: 'white' },
      ],
      newTodo: '',
    }));
  };

  handleToggleTodo = (index) => {
    this.setState((prevState) => {
      const updatedTodos = [...prevState.todos];
  
      if (updatedTodos[index] && typeof updatedTodos[index].color !== 'undefined') {
        const currentColor = updatedTodos[index].color;
  
        updatedTodos[index] = {
          ...updatedTodos[index],
          completed: !updatedTodos[index].completed,
          color: currentColor === 'white' ? 'lightgreen' : 'white',
        };
      }
  
      return { todos: updatedTodos };
    });
  };

  handleDeleteTodo = (index) => {
    this.setState((prevState) => {
      const updatedTodos = [...prevState.todos];
      updatedTodos.splice(index, 1);
      return { todos: updatedTodos };
    });
  };

  render() {
    return (
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: 'auto' }}>
        <h1>Todo App</h1>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {this.state.todos.map((todo, index) => (
            <li
              key={index}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                marginBottom: '8px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: todo.color,
              }}
              onClick={() => {
                this.handleToggleTodo(index);
              }}
            >
              <span>{todo.text}</span>
              <span
                onClick={() => this.handleDeleteTodo(index)}
                style={{
                  color: 'red',
                  fontWeight: 'bold',
                  marginLeft: '8px',
                  cursor: 'pointer',
                }}
              >
                X
              </span>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: '16px' }}>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleInputChange}
            style={{ marginRight: '8px', padding: '4px' }}
          />
          <button
            onClick={this.handleAddTodo}
            style={{ padding: '4px 8px', cursor: 'pointer' }}
          >
            Add Todo
          </button>
        </div>
      </div>
    );
  }
}

export default TodoApp;