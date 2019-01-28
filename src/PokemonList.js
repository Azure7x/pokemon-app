import React, { Component } from 'react';
import axios from 'axios';


class PokemonList extends Component {

  state = {
    currentPokemon: {},
    pokemon: 'blue',
    pokemonList: []
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

    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=3&offset=6').then((result) => {
      this.setState({pokemonList: result})
      console.log('many pokemon', result);
    }).catch((error) => {
      console.log(error);
    });
  }


  render(){

    let newPokemon = this.state.currentPokemon.data;
    if(typeof this.state.currentPokemon !== 'undefined'){
      console.log('render',newPokemon);
    }

    if(typeof this.state.pokemonList.data !== 'undefined'){
      let newList = this.state.pokemonList.data.results;
      console.log('render',newList);
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

        <ol className='pokemon-list'>
          {
            (typeof newList !== 'undefined') && 
            newList.map((pokemon) => (
              <li>
                <h3>name</h3>
                <h3>number</h3>
              </li>
            ))
          }
        </ol>

      </div>
    )
  }
}

export default PokemonList;
