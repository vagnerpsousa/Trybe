import React, {Component} from 'react';
import Pokemon from './Pokemon';
import './pokemon.css';
class Pokedex extends Component {
    render() {
        const pokemons = this.props.pokemons;
        return (
            <div className='pokedex'>
                {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
            </div>
            
        );
    }
}

export default Pokedex;