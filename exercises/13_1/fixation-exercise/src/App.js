import React, { Component } from 'react';
import './App.css';
import CounterDisplay from './CounterDisplay';
import DadJoke from './DadJoke';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  componentDidMount() {
    this.setState({
      counter: 10,
    })
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.counter < 12 || nextState.counter > 15) return true;
    return false;
  }

  render() {
    return (
      <div>
        Contador
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}>
          Soma
        </button>
        <CounterDisplay value={this.state.counter} />
        <DadJoke />
      </div>
    );
  }
}

export default App;
