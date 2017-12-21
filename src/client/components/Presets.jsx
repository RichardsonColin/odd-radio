import React, { Component } from 'react';

class Presets extends Component {
  render() {
    return (
      <div className="container presets">
        <div className="row border">
          <div className="six columns presets-title">
            Presets:
          </div>
          <div className="six columns presets-station" onClick={(e) => this.props.handleSelectedStation(this.props.presets.one)}>
            { this.props.presets.one.name }
          </div>
          <div className="six columns presets-station" onClick={(e) => this.props.handleSelectedStation(this.props.presets.two)}>
            { this.props.presets.two.name }
          </div>
          <div className="six columns presets-station" onClick={(e) => this.props.handleSelectedStation(this.props.presets.three)}>
            { this.props.presets.three.name }
          </div>
          <div className="six columns presets-station" onClick={(e) => this.props.handleSelectedStation(this.props.presets.four)}>
            { this.props.presets.four.name }
          </div>
          <div className="six columns presets-station" onClick={(e) => this.props.handleSelectedStation(this.props.presets.five)}>
            { this.props.presets.five.name }
          </div>
        </div>
      </div>
    );
  }
}

export default Presets;