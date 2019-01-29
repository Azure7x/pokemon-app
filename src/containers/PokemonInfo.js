import React, { Component } from 'react';
import axios from 'axios';

class PokemonInfo extends Component {

  state = {
    currentPokemon: {}
  }

  getPokemon = (url) => {
    axios.get(url).then((result) => {
      this.setState({currentPokemon: result});
    }).catch((error) => {
      console.log(error);
    });
  }

  componentDidMount(){
    this.getPokemon('https://pokeapi.co/api/v2/pokemon/ivysaur/');
  }

  render() {

    let newPokemon = this.state.currentPokemon.data;
    if(typeof this.state.currentPokemon !== 'undefined'){
      console.log('render',newPokemon);
    }

    return(
      <div>
        {
          (typeof newPokemon !== 'undefined') &&
          <div className='card'>
            <img className='pokemonImg' src={newPokemon.sprites.front_default}/>
            <h4 className='pokemonNumber'>{newPokemon.id}</h4>
            <h4 className='pokemonName'>{newPokemon.name}</h4>
          </div>
        }
      </div>
    )
  }

}

export default PokemonInfo;
