import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
    render () {
        const { name, type, averageWeight, image } = this.props.Pokemon
        return (
            <div>
               <p>${name}</p> 
                <p>${type}</p>
                <p>${averageWeight.value}</p>
                <p>${averageWeight.measurementUnit}</p>
                <img src={image} alt={`${name} sprite`} />
            </div>
        )
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        measurementUnit: PropTypes.string,
        value: PropTypes.number
      }),
      image: PropTypes.string,
    }).isRequired,
};

export default Pokemon