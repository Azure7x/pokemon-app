import React, { Component } from 'react';

class PokemonInfo extends Component {


  // getPokemon = (pokemon) => {
  //   let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
  //   axios.get(url).then((result) => {
  //     this.setState({currentPokemon: result});
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }
  //
  // componentDidMount(){
  //   this.getPokemon('ivysaur');
  // }

  render() {

    let newPokemon = this.props.currentPokemon.data;
    // if(typeof this.state.currentPokemon !== 'undefined'){
    //   console.log('render',newPokemon);
    // }

    return(
      <div>
        {
          (typeof newPokemon !== 'undefined') &&
          <div className='card'>
            <img className='pokemonImg' src={newPokemon.sprites.front_default} alt={newPokemon.name}/>
            <h4 className='pokemonNumber'>{newPokemon.id}</h4>
            <h4 className='pokemonName'>{newPokemon.name}</h4>
          </div>
        }
      </div>
    )
  }

}

export default PokemonInfo;
