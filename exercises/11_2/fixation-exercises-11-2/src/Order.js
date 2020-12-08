import React from 'react';
import './Order.css';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.product;

    return (
      <span className="order"> {user} bought {product} for </span>
    );
  }
}

export default Order;