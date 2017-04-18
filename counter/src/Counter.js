import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0
  }

  /* Alternatively...
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }
  */

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrement = () => {
    // Functional setState
    this.setState(state => ({
      counter: state.counter - 1
    }))
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.decrement}>&ndash;</button>
        <span className="count">{this.state.counter}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
