import React, { Component } from 'react';
import axios from 'axios';


class PokemonList extends Component {

  state = {
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
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=9').then((result) => {
      this.setState({pokemonList: result})
      console.log('many pokemon', result);
    }).catch((error) => {
      console.log(error);
    });
  }


  render(){

    let newList = [];
    if(typeof this.state.pokemonList.data !== 'undefined'){
      newList = this.state.pokemonList.data.results;
      console.log('render',newList);
    }

    return(
      <ul className='pokemon-list'>
          {
            typeof newList !== 'undefined' &&
            newList.map((pokemon) => (
              <li className='list-item' key={pokemon.name}>
                <h3>{pokemon.name}</h3>
              </li>
            ))
          }
      </ul>
    )
  }
}

export default PokemonList;
