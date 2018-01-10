import React, { Component } from 'react';

class Team extends Component {
  render() {
    return (
      <div className="container masthead-info">
        <div className="row center">
          <h4>The Team</h4>
        </div>
        <div className="row">
          <p>The team behind oddrad.io:</p>
          <div className="row">
            <a href="https://github.com/johnniereg" target="blank"><p>Johnnie Regalado</p></a>
            <a href="https://github.com/DevYves" target="blank"><p>Yves Freypons</p></a>
            <a href="https://github.com/RyukyuColin" target="blank"><p>Colin Richardson</p></a>
            <a href="https://github.com/SebastianBethell" target="blank"><p>Sebastian Bethell</p></a>
          </div>
          <p>oddrad.io was developed by brand new programmers as a final project for the Lighthouse Labs web development bootcamp.</p>
        </div>
      </div>
    )
  }
}

export default Team;