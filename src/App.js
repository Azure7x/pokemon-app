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
  //return a color based on the pokemon type
  getTypeColor = (type) => {

    let color;

    switch (type) {
      case 'normal':
        color = 'A8A77A';
        break;
      case 'fire':
        color = 'EE8130';
        break;
      case 'water':
        color = '6390F0';
        break;
      case 'electric':
        color = 'F7D02C';
        break;
      case 'grass':
        color = '7AC74C';
        break;
      case 'ice':
        color = '96D9D6';
        break;
      case 'fighting':
        color = 'C22E28';
        break;
      case 'poison':
        color = 'A33EA1';
        break;
      case 'ground':
        color = 'E2BF65';
        break;
      case 'flying':
        color = 'A98FF3';
        break;
      case 'psychic':
        color = 'F95587';
        break;
      case 'bug':
        color = 'A6B91A';
        break;
      case 'rock':
        color = 'B6A136';
        break;
      case 'ghost':
        color = '735797';
        break;
      case 'dragon':
        color = '6F35FC';
        break;
      case 'dark':
        color = '705746';
        break;
      case 'steel':
        color = 'B7B7CE';
        break;
      case 'fairy':
        color = 'D685AD';
        break;
      default:
        color = 'black';
        break;
    }

    return '#' + color;
  }

  getPokemon = (pokemon) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
    axios.get(url).then((result) => {
      this.setState({currentPokemon: result});
      let card = document.getElementById('card');
      // if pokemon has 2 types the 2nd types color is used otherwise the 1st type color is used
      let typeColor = result.data.types.length === 1
        ? result.data.types[0].type.name
        : result.data.types[1].type.name;
      card.style.backgroundColor = this.getTypeColor(typeColor);
    }).catch((error) => {
      console.log(error);
    });
  }

  componentDidMount(){
    this.getPokemon('bulbasaur');
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
