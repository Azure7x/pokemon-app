import React, { Component } from 'react';

class PokemonStats extends Component {

  render() {

    return(
      <div className='card-section'>
      <h4 className='section-title'>Stats</h4>
      {this.props.stats.map((stat) => (
        <h5>{stat.stat.name}-{stat.base_stat}</h5>
      ))}
      </div>
    )
  }
}

export default PokemonStats;
