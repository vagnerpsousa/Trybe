import React, { Component } from 'react';
import pokemons from './data';

class Pokedex extends Component {
    render () {
        return (
            <div>
                <h1>Pokedex</h1>
                {pokemons.map(pokemon => {
                    return <Pokedex
                    key={pokemon.id}
                    pokemon={pokemon}
                    />
                })}
            </div>

        )
    }
}

export default Pokedex;