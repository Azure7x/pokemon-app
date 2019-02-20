import React, { Component } from 'react';

class PokemonStats extends Component {
  //the shortened names of the stats
  statName = ['spd', 'sp-def', 'sp-atk', 'def', 'atk', 'hp'];

  render() {

    return(
      <div className='stat-section'>
          <h3>Base Stats</h3>
          {this.props.pokemonStats.map((stat, index) => (
            <div className='single-stat'>
            <h5>{this.statName[index]}</h5>
            <hr/>
            <h5>{stat.base_stat}</h5>
            </div>
          ))}
      </div>
    )
  }
}

export default PokemonStats;
