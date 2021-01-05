import React from 'react';
import './App.css';

class FancyButtons extends React.Component {

  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
    this.state = {
      corBotao1: '',
      corBotao2: '',
      corBotao3: '',
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0
    }
  }

  handleClick1() {
    this.setState((estadoAnterio, _props) => ({
      numeroDeCliques1: estadoAnterio.numeroDeCliques1 + 1
    }))
    console.log(this.state.corBotao1)
    this.state.numeroDeCliques1 % 2 === 0 ? this.setState({ corBotao1: 'verde' }) : this.setState({ corBotao1: 'vermelho' })    
  }

  handleClick2() {
    this.setState((estadoAnterio, _props) => ({
      numeroDeCliques2: estadoAnterio.numeroDeCliques2 + 1
    }))
    console.log(this.state.corBotao2)
    this.state.numeroDeCliques2 % 2 === 0 ? this.setState({ corBotao2: 'verde' }) : this.setState({ corBotao2: 'vermelho' })    
  }
  handleClick3() {
    this.setState((estadoAnterio, _props) => ({
      numeroDeCliques3: estadoAnterio.numeroDeCliques3 + 1
    }))
    console.log(this.state.corBotao3)
    this.state.numeroDeCliques3 % 2 === 0 ? this.setState({ corBotao3: 'verde' }) : this.setState({ corBotao3: 'vermelho' })    
  }

  render() {
    return <div>
      <button className={this.state.corBotao1} onClick={this.handleClick1}>{this.state.numeroDeCliques1}</button>
      <button className={this.state.corBotao2} onClick={this.handleClick2}>{this.state.numeroDeCliques2}</button>
      <button className={this.state.corBotao3} onClick={this.handleClick3}>{this.state.numeroDeCliques3}</button>
    </div>
  }
}
export default FancyButtons;
