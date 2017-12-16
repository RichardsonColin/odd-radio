import React, { Component } from 'react';

class Station extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      stream: this.props.audioFeed,
      type: this.props.type
    }
    this.onStationSelect = this.onStationSelect.bind(this);
    this.onInfoSelect = this.onInfoSelect.bind(this);

  }

  onStationSelect(event) {
    this.props.handleSelectedStation(this.state.name, this.state.stream, this.state.type);
  }

  onInfoSelect(event) {
    console.log('---- onInfoSelect ----', this);
    let infoId = this.props.name
    let info = document.getElementById(infoId);
    console.log('info.className', info.className)
    if (info.className === "station-info content") {
      info.className = "";
      info.className = "station-info";
    } else {
      info.className = "";
      info.className = "station-info content";
    }
  }

  render() {
      console.log('Rendering <Station>')
    return (
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
        <div className="row">
          <div className="station-info content" id={ this.props.name }>
            { this.props.description } { this.props.description }
          </div>
        </div>
        <div className="row">
          <div className="two columns">Two</div>
          <div className="ten columns">Ten</div>
        </div>
      </div>
    );
  }
}
export default Station;