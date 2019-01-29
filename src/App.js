import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonList from './containers/PokemonList.js';
import PokemonInfo from './containers/PokemonInfo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonInfo/>
        <PokemonList/>
      </div>
    );
  }
}

export default App;
