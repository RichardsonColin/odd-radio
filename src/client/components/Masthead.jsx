import React, { Component } from 'react';

class Masthead extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
    <div>
        <div className="container masthead">
          <div className="row station-row border">
            <div className="one-third column center ">
              About
            </div>
            <div className="one-third column center">
              Contact
            </div>
            <div className="one-third column center">
              Team
            </div>
          </div>
          <div className="row border">
            <div className="column">
              <div className="container masthead-info">
                <p>oddrad.io is a curated collection of some of the best independent radio stations that Canada has to offer. Each station listed here is powered by volunteers from their local community. DJs pick their own music and you really never know what you might hear.</p>
                <p>The station streams are collected here in a single place where you can easily navigate from one to another, or save your favourites to the presets. You won't love what you hear on one station 100% of the time, but there's always another station to check out.</p>
                <p>Unlike other internet radio aggregators, the selection on oddrad.io is kept intentionally small. With less than 30 stations to pick from, oddrad.io recreates a true radio dial experience online.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Masthead;