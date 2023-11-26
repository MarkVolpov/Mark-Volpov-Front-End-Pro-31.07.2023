import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";

function App() {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState(0);
  const [allComplete, setAllComplete] = useState(0);
  const [showCompleted, setShowCompleted] = useState(false);

  const putTodo = (value) => {
    if (value) {
      setTodos([...todos, { id: Date.now(), text: value, done: false }]);
      setAllTodos(allTodos + 1);
    } else {
      alert("Type text");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        const updatedTodo = {
          ...todo,
          done: !todo.done,
        };

        if (updatedTodo.done) {
          setAllComplete(allComplete + 1);
        } else {
          setAllComplete(allComplete - 1);
        }

        return updatedTodo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setAllTodos(allTodos - 1);
    const deletedTodo = todos.find((todo) => todo.id === id);
    if (deletedTodo && deletedTodo.done) {
      setAllComplete(allComplete - 1);
    }
  };

  const clearTodos = () => {
    setTodos([]);
    setAllTodos(0);
    setAllComplete(0);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="title">TodoList</h1>
        <Form putTodo={putTodo} />
        <ul className="todos">
          {todos
            .filter((todo) => (showCompleted ? todo.done : !todo.done))
            .map((todo) => (
              <li
                className={todo.done ? "todo done" : "todo"}
                key={todo.id}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
                <img
                  src="./remove.png"
                  alt="delete"
                  className="delete"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTodo(todo.id);
                  }}
                />
              </li>
            ))}
          <div className="info">
            <span>All todos: {allTodos}</span>
            <span>Complete: {allComplete}</span>
          </div>
          <button className="btn" onClick={clearTodos}>
            Очистить все
          </button>
          <button
            className="btn"
            onClick={() => setShowCompleted(!showCompleted)}
          >
            {showCompleted ? "Hide completed" : "Show completed"}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default App;