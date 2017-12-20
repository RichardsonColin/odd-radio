import React, { Component } from 'react';
import PlayerButtons from './PlayerButtons.jsx';

class Station extends Component {

  constructor(props) {
    super(props);
    this.state = {
      details: {
        id: this.props.id,
        name: this.props.name,
        audioFeed: this.props.audioFeed,
        streamType: this.props.streamType
      }
    }
    this.onInfoSelect = this.onInfoSelect.bind(this);
  }

  // Event handler for info expansion.
  onInfoSelect(event) {
    let infoId = this.props.name
    let info = document.getElementById(infoId);
    let station = document.getElementById(infoId).previousSibling;
    let chevron = event.target;
    if (info.className === "container info-container hide-class") {
      info.className = "";
      info.className = "container info-container";
      station.className += " no-opacity";
      chevron.className = "";
      chevron.className = "fa fa-chevron-up card-chevron";
    } else {
      info.className = "";
      info.className = "container info-container hide-class";
      station.className = `container station-container${this.props.stationType}`;
      chevron.className = "";
      chevron.className = "fa fa-chevron-down card-chevron";
    }
  }

  render() {
      console.log('Rendering <Station>')
    return (

      <div>
        <div className={ `container station-container${this.props.stationType}` }>
          <div className="row station-row border">
            <div className="one-third column station-name center"> {this.props.name} </div>
            <div className="one-third column station-play-button center">
              <PlayerButtons clickFunction={ this.props.handleSelectedStation } params={ this.state.details }
              playState={ this.props.playState } activeStation={ this.props.activeStation } />
            </div>
            <div className= "one-third column station-info-button center">
              <i className="fa fa-chevron-down card-chevron" aria-hidden="true" onClick={ this.onInfoSelect }></i>
            </div>
          </div>
        </div>
        <div className="container info-container hide-class" id={ this.props.name }>
          <div className="row center-align">
            <div className="station-info center">
              <div className="station-branding one-third column"> { this.props.name } </div>
              <div className="two-thirds column info">
                <div><b>Location:</b> { this.props.city } </div>
                <div><b>Description:</b> { this.props.description } </div>
                <div><b>Home Page:</b> <a href={this.props.homePage} target='_blank'> { this.props.homePage } </a> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Station;