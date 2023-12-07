import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrementCounter() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button>
      </div>
    );
  }
}

export default App;