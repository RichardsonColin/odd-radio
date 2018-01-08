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
                <div className="row center">
                  <h5>About oddrad.io</h5>
                </div>
                <div className="row">
                  <p>oddrad.io is a curated collection of some of the best independent radio stations that Canada has to offer. Each station listed here is powered by volunteers from the station's local community. These DJs pick all their own music, be prepared to hear all kinds of weird stuff.</p>
                  <p>The purpose of this app is to collect these unique radio station streams in single place where you can easily navigate from one to another and save your favourites to the presets. You won't love what you hear on one station 100% of the time, but there's always another station to check out. Hit that seek button.</p>
                  <p>Unlike other internet radio aggregators, the selection on oddrad.io is kept intentionally small. With less than 30 stations to pick from, oddrad.io recreates a true radio dial experience online. Except all the stations have unique, human curated offerings.</p>
                </div>
              </div>
              <div className="container masthead-info">
                <div className="row center">
                  <h5>Contact Us</h5>
                </div>
                <div className="row">
                  <p>Got a suggestion for a station to add? Want us to take your station down?</p>
                  <p>Get in touch with us by email: oddradioapp@gmail.com</p>
                </div>
              </div>
              <div className="container masthead-info">
                <div className="row center">
                  <h5>The Team</h5>
                </div>
                <div className="row">
                  <p>oddrad.io was developed as a final project for Lighthouse Labs web development bootcamp.</p>
                  <p>The team behind oddrad.io:</p>
                  <p>Johnnie Regalado</p>
                  <p>Yves Frepon</p>
                  <p>Colin Richardson</p>
                  <p>Sebastian Bethell</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Masthead;