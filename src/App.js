import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PokemonList from './containers/PokemonList.js';
import PokemonInfo from './containers/PokemonInfo.js';
import Header from './containers/Header.js';

class App extends Component {

  state = {
    currentPokemon: {}
  }

  getPokemon = (pokemon) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
    axios.get(url).then((result) => {
      this.setState({currentPokemon: result});
    }).catch((error) => {
      console.log(error);
    });
  }

  componentDidMount(){
    this.getPokemon('ivysaur');
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <PokemonInfo
          currentPokemon={this.state.currentPokemon}
        />
        <PokemonList
          getPokemon={this.getPokemon}
        />
      </div>
    );
  }
}

export default App;
