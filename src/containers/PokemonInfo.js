import React, { Component } from 'react';

class PokemonInfo extends Component {

  //add zeros to the pokemon number if needed
  addZeros = (number) => {
    if(number.toString().length === 1) {
      number = '00' + number;
    } else if(number.toString().length === 2) {
      number = '0' + number;
    }

    return number;
  }

  render() {

    let newPokemon = this.props.currentPokemon.data;

    return(
      <div>
        {
          (typeof newPokemon !== 'undefined') &&
          <div id='card'>
            <h4 className='pokemonNumber'># {this.addZeros(newPokemon.id)}</h4>
            <img className='pokemonImg' src={newPokemon.sprites.front_default} alt={newPokemon.name}/>
            <h4 className='pokemonName'>{newPokemon.name}</h4>
            <div className='card-section'>
              <h4 className='section-title'>Types</h4>
              {newPokemon.types.length === 2 && <h5>{newPokemon.types[1].type.name}</h5>}
              <h5>{newPokemon.types[0].type.name}</h5>
            </div>
          </div>
        }
      </div>
    )
  }

}

export default PokemonInfo;
