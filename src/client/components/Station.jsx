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
    this.onStationSelect = this.onStationSelect.bind(this)

  }

  onStationSelect(event) {
    this.props.handleSelectedStation(this.state.id, this.state.name, this.state.stream, this.state.type);
  }

  render() {
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