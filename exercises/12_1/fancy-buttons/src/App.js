import React from 'react';
import './App.css';

import FancyButtons from './FancyButtons';
import ColorFilter from './ColorFilter';
import colors from './data.js';
//teste
class App extends React.Component {

  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
    this.state = {
      corButton1: 'buttonBlue',
      corButton2: 'buttonBlue',
      corButton3: 'buttonBlue',
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0
    }
  }

  handleClick1() {
    this.setState((estadoAnterio, _props) => ({
      numeroDeCliques1: estadoAnterio.numeroDeCliques1 + 1
    }))
    this.state.numeroDeCliques1 % 2 !== 0 ? this.setState({corButton1: 'buttonGreen'}) : this.setState({ corButton1: 'buttonBlue'})
    
  }
  handleClick2() {
    this.setState((estadoAnterio, _props) => ({
      numeroDeCliques2: estadoAnterio.numeroDeCliques2 + 1
    }))
    this.state.numeroDeCliques2 % 2 !== 0 ? this.setState({corButton2: 'buttonGreen'}) : this.setState({ corButton2: 'buttonBlue'})
    console.log(this.state.corButton2)
  }
  handleClick3() {
    this.setState((estadoAnterio, _props) => ({
      numeroDeCliques3: estadoAnterio.numeroDeCliques3 + 1
    }))
    this.state.numeroDeCliques3 % 2 !== 0 ? this.setState({corButton3: 'buttonGreen'}) : this.setState({ corButton3: 'buttonBlue'})
    console.log(this.state.corButton3)
  }

  render() {
    return <div>
      <button className={this.state.corButton1} onClick={this.handleClick1}>{this.state.numeroDeCliques1}</button>
      <button className={this.state.corButton2} onClick={this.handleClick2}>{this.state.numeroDeCliques2}</button>
      <button className={this.state.corButton3} onClick={this.handleClick3}>{this.state.numeroDeCliques3}</button>
    </div>

  }

}
export default App;
