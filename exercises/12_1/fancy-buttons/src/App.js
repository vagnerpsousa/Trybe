import React from 'react';
import './App.css';
//teste
class App extends React.Component {

  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0
    }
  }

  handleClick1() {
    this.setState((estadoAnterio, _props) => ({
      numeroDeCliques1: estadoAnterio.numeroDeCliques1 + 1
    }))
  }
  handleClick2() {
    this.setState((estadoAnterio, _props) => ({
      numeroDeCliques2: estadoAnterio.numeroDeCliques2 + 1
    }))
  }
  handleClick3() {
    this.setState((estadoAnterio, _props) => ({
      numeroDeCliques3: estadoAnterio.numeroDeCliques3 + 1
    }))
  }

  render() {
    return <div>
      <button onClick={this.handleClick1}>{this.state.numeroDeCliques1}</button>
      <button onClick={this.handleClick2}>{this.state.numeroDeCliques2}</button>
      <button onClick={this.handleClick3}>{this.state.numeroDeCliques3}</button>
    </div>
  }
}
export default App;
