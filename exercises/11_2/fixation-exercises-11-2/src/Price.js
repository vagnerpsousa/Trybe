import React from 'react';
import './Price.css';

class Price extends React.Component {
  render() {
    const { price } = this.props.product;

    return (
        <span className= 'price'> {price.value} {price.currency} </span>      
    );
  }
}

export default Price;