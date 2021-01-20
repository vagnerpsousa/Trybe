import React, { Component } from 'react';


class CounterDisplay extends Component {

  render() {
    return <div> counter: {this.props.value}</div>;
  }
}

export default CounterDisplay;