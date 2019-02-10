import React, { Component } from 'react';
import axios from 'axios';
import escapeRegExp from 'escape-string-regexp';

class PokemonList extends Component {

  state = {
    pokemonList: [],
    query: ''
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
      this.props.getPokemon(event.target.children[0].innerHTML);
    }

  }

  updateQuery = (query) => {
      this.setState({query: query.trim()});
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
    if(this.state.query ){
      let match = new RegExp(escapeRegExp(this.state.query), 'i');
      newList = this.state.pokemonList.data.results.filter(pokemon => match.test(pokemon.name));
    } else if(typeof this.state.pokemonList.data !== 'undefined') {
      newList = this.state.pokemonList.data.results;
    }

    return(
      <div className='side-menu'>
        <div className='search-top'>
          <input
          type='text'
          placeholder='Search Pokemon'
          className='pokemon-searchbar'
          value={this.query}
          onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>

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
      </div>
    )
  }
}

export default PokemonList;
