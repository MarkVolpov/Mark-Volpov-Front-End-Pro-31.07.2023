import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

  
    this.state = {
      products: [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
       
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Items list</h1>
        <ul>
          {this.state.products.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;