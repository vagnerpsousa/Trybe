import React from 'react';

class PokemonDetails extends React.Component {
    render() {
        const {pokemons, matche } = this.props;
        return (
            <div>
                <span>More Details</span>
                {pokemons.filter((pokemon) => pokemon.id === matche.id)
                         .map(pokemon => (
                             <p>{pokemon.id}</p>
                         ))}
            </div>
        );
    }
}

export default PokemonDetails;