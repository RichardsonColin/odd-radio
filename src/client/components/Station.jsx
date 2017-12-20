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
      },
      expanded: false
    }

    this.toggleStationInfo = this.toggleStationInfo.bind(this);
  }

  // Switch between expanded true and false for showing info.
  toggleStationInfo() {
    if (this.state.expanded) {
      this.setState({
        expanded: false
      })
    } else {
      this.setState({
        expanded: true
      })
    }
  }

  render() {

    // If it is not expanded, render just some details.
    if (!this.state.expanded) {
      return (
        <div>
          <div className={`container station-container${this.props.stationType}`}>
            <div className="row station-row border">
              <div className="one-third column station-name center"> {this.props.name} </div>
              <div className="one-third column station-play-button center">
                <PlayerButtons clickFunction={this.props.handleSelectedStation} params={this.state.details}
                  playState={this.props.playState} activeStation={this.props.activeStation} />
              </div>
              <div className="one-third column station-info-button center">
                <i className="fa fa-chevron-down card-chevron" aria-hidden="true" onClick={(e) => this.toggleStationInfo() }></i>
              </div>
            </div>
          </div>
        </div>
      )

    // If it is expanded, render all the details.
    } else {
      return (
        <div>
          <div className={ `container station-container${this.props.stationType} info-expanded` }>
            <div className="row station-row border">
              <div className="one-third column station-name center"> </div>
              <div className="one-third column station-play-button center">
                <PlayerButtons clickFunction={ this.props.handleSelectedStation } params={ this.state.details }
                playState={ this.props.playState } activeStation={ this.props.activeStation } />
              </div>
              <div className="one-third column station-info-button center">
                <i className="fa fa-chevron-up card-chevron" aria-hidden="true" onClick={ (e) => this.toggleStationInfo() }></i>
              </div>
            </div>
          </div>
          <div className="container info-container info-expanded" id={ this.props.name }>
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
}

export default Station;