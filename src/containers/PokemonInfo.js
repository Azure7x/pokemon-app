import React, { Component } from 'react';

class PokemonInfo extends Component {

  render() {

    let newPokemon = this.props.currentPokemon.data;
    // if(typeof this.state.currentPokemon !== 'undefined'){
    //   console.log('render',newPokemon);
    // }

    return(
      <div>
        {
          (typeof newPokemon !== 'undefined') &&
          <div className='card'>
            <img className='pokemonImg' src={newPokemon.sprites.front_default} alt={newPokemon.name}/>
            <h4 className='pokemonNumber'>{newPokemon.id}</h4>
            <h4 className='pokemonName'>{newPokemon.name}</h4>
          </div>
        }
      </div>
    )
  }

}

export default PokemonInfo;
