import React, { Component } from 'react';
import { onStationSelect, onInfoSelect } from '../util/ClientFunctions.jsx';

class Station extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      stream: this.props.audioFeed,
      type: this.props.type
    }
    this.onStationSelect = onStationSelect.bind(this);
    this.onInfoSelect = onInfoSelect.bind(this);
  }

  render() {
      console.log('Rendering <Station>')
    return (

      <div>
        <div className="container station-container">
          <div className="row station-row border">
            <div className="one-third column station-name center"> {this.props.name} </div>
            <div className="one-third column station-play-button center">
              <i className="fa fa-play card-play-button " aria-hidden="true" onClick={ this.onStationSelect }></i>
            </div>
            <div className="one-third column station-info-button center">
              <i className="fa fa-chevron-down card-chevron" aria-hidden="true" onClick={ this.onInfoSelect }></i>
            </div>
          </div>
        </div>
        <div className="container info-container content" id={ this.props.name }>
          <div className="row center-align">
            <div className="station-info center">
              <div className="station-branding one-third column"> { this.props.name } </div>
              <div className="two-thirds column info">
                <div>Location: { this.props.city } </div>
                <div>Description: { this.props.description } </div>
                <div>Home Page: { this.props.homePage } </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Station;