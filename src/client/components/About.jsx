import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="container masthead-info">
        <div className="row center">
          <h5>About oddrad.io</h5>
        </div>
        <div className="row">
          <p>oddrad.io is a curated collection of some of the best independent radio stations that Canada has to offer. Each station listed here is powered by volunteers from the station's local community. These DJs pick all their own music, be prepared to hear all kinds of weird stuff.</p>
          <p>The purpose of this app is to collect these unique radio station streams in single place where you can easily navigate from one to another and save your favourites to the presets. You won't love what you hear on one station 100% of the time, but there's always another station to check out. Hit that seek button.</p>
          <p>Unlike other internet radio aggregators, the selection on oddrad.io is kept intentionally small. With less than 30 stations to pick from, oddrad.io recreates a true radio dial experience online. Except all the stations have unique, human curated offerings.</p>
        </div>
      </div>
    )
  }
}

export default About;