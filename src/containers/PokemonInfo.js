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

  getHeightWeight = (number) => {
    return (number * .1).toFixed(2);
  }

  render() {

    let newPokemon = this.props.currentPokemon.data;

    return(
      <div>
        {
          (typeof newPokemon !== 'undefined') &&
          <div id='card'>
            <h4 className='pokemonNumber'># {this.addZeros(newPokemon.id)}</h4>
            <div className='card-img'>
              <img className='pokemonImg' src={newPokemon.sprites.front_default} alt={newPokemon.name}/>
            </div>
            <h2 className='pokemonName'>{newPokemon.name}</h2>
            <div className='section-container'>
            {/*The section for the pokemons types*/}
              <div className='card-section'>
                <h4 className='section-title'>Types</h4>
                {newPokemon.types.length === 2 && <h5>{newPokemon.types[1].type.name}</h5>}
                <h5>{newPokemon.types[0].type.name}</h5>
              </div>
              {/*The section for the pokemons abilities*/}
              <div className='card-section'>
                <h4 className='section-title'>Abilities</h4>
                {newPokemon.abilities.map((ability) => (
                  <h5>{ability.ability.name}</h5>
                ))}
              </div>
              {/*The section is for pokemons height and weight*/}
              <div className='card-section'>
              <h4 className='section-title'>Types</h4>
              <h5>Height: {this.getHeightWeight(newPokemon.height)}</h5>
              <h5>Weight: {this.getHeightWeight(newPokemon.weight)}</h5>
              </div>
              {/*The section for the pokemons stats*/}
              <div className='card-section'>
                <h4 className='section-title'>Stats</h4>
                {newPokemon.stats.map((stat) => (
                  <h5>{stat.stat.name}-{stat.base_stat}</h5>
                ))}
              </div>
            </div>
          </div>
        }
      </div>
    )
  }

}

export default PokemonInfo;
