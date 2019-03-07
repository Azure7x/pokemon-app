import React, { Component } from 'react';
import PokemonStats from './PokemonStats';

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

  machineMove = [];
  levelUpMove = [];
  tutorMove = [];

  render() {

    let newPokemon = this.props.currentPokemon.data;

    if(typeof newPokemon !== 'undefined') {

      newPokemon.moves.map((move) => {
        if(move.version_group_details[0].move_learn_method.name === 'tutor') {
          this.tutorMove.push(move);
        } else if(move.version_group_details[0].move_learn_method.name === 'machine') {
          this.machineMove.push(move);
        } else if(move.version_group_details[0].move_learn_method.name === 'level-up') {
          this.levelUpMove.push(move);
        }
      });
    }

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
              <h5>Height: {this.getHeightWeight(newPokemon.height)}m</h5>
              <h5>Weight: {this.getHeightWeight(newPokemon.weight)}kg</h5>
              </div>
              {/*The section is for the pokemons stats*/}
              <PokemonStats
                pokemonStats={newPokemon.stats}
              />
              {/*The section for the pokemons moves*/}
              <div className='card-section'>
                <h4 className='section-title'>Tutor Moves</h4>
                {this.tutorMove.map((move) => (
                    <h5>{move.move.name}</h5>
                ))}
              </div>
              {/*The section for the pokemons moves*/}
              <div className='card-section'>
                <h4 className='section-title'>TM/HM Moves</h4>
                {this.machineMove.map((move) => (
                  <h5>{move.move.name}</h5>
                ))}
              </div>
              {/*The section for the pokemons moves*/}
              <div className='card-section'>
                <h4 className='section-title'>Level Up Moves</h4>
                {this.levelUpMove.map((move) => (
                  <div className='move-row'>
                    <h5>{move.move.name}</h5>
                    <h5>Level: {move.version_group_details[0].level_learned_at}</h5>
                  </div>
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
