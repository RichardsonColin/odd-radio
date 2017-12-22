import React, { Component } from 'react';
import PlayerButtons from './PlayerButtons.jsx';
import SetPresets from './SetPresets.jsx';

class Station extends Component {

  constructor(props) {
    super(props);
    this.state = {
      details: {
        id: this.props.id,
        name: this.props.name,
        audioFeed: this.props.audioFeed,
        streamType: this.props.streamType,
        frequency: this.props.frequency,
        city: this.props.city,
        province: this.props.province
      },
      expandedStationName: this.props.expandedName,
      expandedStation: this.props.expandedState
    }
  }

  // Switch between expanded true and false for showing info


componentWillReceiveProps(props) {
  this.setState({
    expandedStationName: props.expandedName,
    expandedStation: props.expandedState
  })
}

  render() {
     // If it is expanded, render all the details.
    if (this.props.expandedName === this.state.details.name && this.state.expandedStation === true) {
      return (
          <div id={ this.props.name }>
            <div className={ `container station-container${this.props.stationType} info-expanded` }>
              <div className="row station-row border">
                <div className="one-third column station-name center"> </div>
                <div className="one-third column station-play-button center">
                  <PlayerButtons clickFunction={ this.props.handleSelectedStation } params={ this.state.details }
                  streamLoading={this.props.streamLoading} playState={ this.props.playState }
                  activeStation={ this.props.activeStation } />
                </div>
                <div className="one-third column station-info-button center">
                  <i className="fa fa-chevron-up card-chevron" aria-hidden="true" onClick={(e) => this.props.hideStationInfo()}></i>
                </div>
              </div>
            </div>
            <div className="container info-container info-expanded" >
              <div className="row center-align">
                <div className="station-info center">
                  <div className="station-branding one-third column"> { this.props.name } </div>
                  <div className="two-thirds column info">
                    <div><b>Location:</b> { this.props.city } </div>
                    <div><b>Description:</b> { this.props.description } </div>
                    <div><b>Home Page:</b> <a href={this.props.homePage} target='_blank'> { this.props.homePage } </a> </div>
                  </div>
                </div>
                <SetPresets presets={this.props.presets} title="Save Station In Presets: " clickFunction={ this.props.savePreset } details={ this.state.details }/>
              </div>
            </div>
          </div>
        )
    } else {
    // If it is not expanded, render just some details.
      return (
        <div id={ this.props.name }>
          <div className={`container station-container${this.props.stationType}`}>
            <div className="row station-row border">
              <div className="one-third column station-name center"> {this.props.name} </div>
              <div className="one-third column station-play-button center">
                <PlayerButtons clickFunction={this.props.handleSelectedStation} params={this.state.details}
                  streamLoading={this.props.streamLoading} playState={ this.props.playState }
                  activeStation={this.props.activeStation} />
              </div>
              <div className="one-third column station-info-button center">
                <i className="fa fa-chevron-down card-chevron" aria-hidden="true" onClick={(e) => this.props.findStationExpandInfo(this.props.name)}></i>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Station;