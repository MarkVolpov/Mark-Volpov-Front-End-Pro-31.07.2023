import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    
    this.inputRef = React.createRef();
  }

  
  focusInput = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.inputRef} type="text" />
        <button onClick={this.focusInput}>Focus input</button>
      </div>
    );
  }
}

export default App;