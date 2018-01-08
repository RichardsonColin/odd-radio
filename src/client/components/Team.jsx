import React, { Component } from 'react';

class Team extends Component {
  render() {
    return (
      <div className="container masthead-info">
        <div className="row center">
          <h5>The Team</h5>
        </div>
        <div className="row">
          <p>The team behind oddrad.io:</p>
          <div className="row">
            <p>Johnnie Regalado</p>
            <p>Yves Frepon</p>
            <p>Colin Richardson</p>
            <p>Sebastian Bethell</p>
          </div>
          <p>oddrad.io was developed as a final project for Lighthouse Labs web development bootcamp.</p>
        </div>
      </div>
    )
  }
}

export default Team;