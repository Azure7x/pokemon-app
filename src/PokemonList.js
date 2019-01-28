import React, { Component } from 'react';
import axios from 'axios';


class PokemonList extends Component {

  state = {
    currentPokemon: {},
    pokemon: 'blue'
  }

  componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/pokemon/bulbasaur/').then((result) => {
      console.log(result);
      console.log(result.data.name);
      console.log(result.data.id);
      console.log(result.data.sprites.front_default);
      console.log('state: ', this.state.currentPokemon);
      this.setState({currentPokemon: result});
      console.log('state: ', this.state.currentPokemon.data.name);
    }).catch((error) => {
      console.log(error);
    });


  }

  render(){

    let newPokemon = this.state.currentPokemon.data;
    if(typeof this.state.currentPokemon !== 'undefined'){
      console.log('render',newPokemon);
    }

    return(
      <div>
      pokemon list div
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

export default PokemonList;
