import React, { Component } from 'react';
import axios from 'axios';

class PokemonList extends Component {

  state = {
    pokemonList: []
  }

  // getPokemon = (url) => {
  //   axios.get(url).then((result) => {
  //     this.setState({currentPokemon: result});
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }

  listClick = (event) => {
    if(event.target.nodeName === 'H3'){
      this.props.getPokemon(event.target.innerHTML);
    } else if (event.target.nodeName === 'LI') {
      alert(event.target.children[0].innerHTML);
    }
  }

  componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151').then((result) => {
      this.setState({pokemonList: result})
    }).catch((error) => {
      console.log(error);
    });
  }


  render(){

    let newList = [];
    if(typeof this.state.pokemonList.data !== 'undefined'){
      newList = this.state.pokemonList.data.results;
    }

    return(
      <ul className='pokemon-list' onClick={(event) => this.listClick(event)}>
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
