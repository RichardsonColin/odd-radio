import React, { Component } from 'react';

class Station extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      stream: this.props.audioFeed,
      type: this.props.type
    }
    this.onStationSelect = this.onStationSelect.bind(this)

  }

  onStationSelect(event) {
    console.log("Clicked on a station.");
    console.log(this.state.name, this.state.stream, this.state.type);
    this.props.handleSelectedStation(this.state.name, this.state.stream, this.state.type);
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
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}
export default Station;