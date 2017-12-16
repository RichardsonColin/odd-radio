import React, { Component } from 'react';

class Station extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      stream: this.props.audioFeed,
      type: this.props.type
    }
    this.onStationSelect = this.onStationSelect.bind(this);
    this.onInfoSelect = this.onInfoSelect.bind(this);

  }

  onStationSelect(event) {
    this.props.handleSelectedStation(this.state.id, this.state.name, this.state.stream, this.state.type);
  }

  onInfoSelect(event) {
    console.log('---- onInfoSelect ----', this);
    let infoId = this.props.name
    let info = document.getElementById(infoId);
    console.log('info.className', info.className)
    if (info.className === "container station-container content") {
      info.className = "";
      info.className = "container station-container";
    } else {
      info.className = "";
      info.className = "container station-container content";
    }
  }

  render() {
      console.log('Rendering <Station>')
    return (
      <div>
        <div className="container station-container">
          <div className="row station-row border">
            <div className="one-third column station-name center"> {this.props.name} </div>
            <div className="one-third column station-play-button center">
              <i className="fa fa-play" aria-hidden="true" onClick={ this.onStationSelect }></i>
            </div>
            <div className="one-third column station-info-button center">
              <i className="fa fa-chevron-down" aria-hidden="true" onClick={ this.onInfoSelect }></i>
            </div>
          </div>
        </div>
        <div className="container station-container content" id={ this.props.name }>
          <div className="row center-align">
            <div className="station-info center" >
              <p>Location: { this.props.city } </p>
              <p>Description: { this.props.description } </p>
              <p>Home Page: { this.props.homePage } </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Station;