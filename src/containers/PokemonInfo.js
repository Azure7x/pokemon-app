import React, { Component } from 'react';

class PokemonInfo extends Component {

  // getTypeColor = (type) => {
  //   let color = 'blue';
  //   let card = document.getElementById('card');
  //
  //   if(card !== null) {
  //     card.style.backgroundColor = 'orange';
  //   }
  // }

  render() {

    let newPokemon = this.props.currentPokemon.data;

    // let card = document.getElementById('card');
    // if(card !== null){
    //   card.style.backgroundColor = 'orange';
    //   console.log('color called');
    // }

    return(
      <div>
        {
          (typeof newPokemon !== 'undefined') &&
          <div id='card'>
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
