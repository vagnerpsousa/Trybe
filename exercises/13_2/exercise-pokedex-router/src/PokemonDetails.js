import React from 'react';

class PokemonDetails extends React.Component {
    render() {
        const pokemons = this.props.pokemons;
        return (
            <div>
                <span>More Details</span>
                {pokemons.find((pokemon) => pokemon.id === '25')
                         .map(pokemon => (
                             <p>{pokemon.id}</p>
                         ))}
            </div>
        );
    }
}

export default PokemonDetails;