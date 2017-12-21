import React, { Component } from 'react';

class SetPresets extends Component {
  render() {
    return (
      <div className="container presets">
        <div className="center">
          Presets:
        </div>
        <div className="row border">
          <div className="five columns" onClick={(e) => this.props.handleSelectedStation(this.props.presets.one)}>
            One
          </div>
          <div className="five columns" onClick={(e) => this.props.handleSelectedStation(this.props.presets.two)}>
            Two
          </div>
          <div className="five columns" onClick={(e) => this.props.handleSelectedStation(this.props.presets.three)}>
            Three
          </div>
          <div className="five columns" onClick={(e) => this.props.handleSelectedStation(this.props.presets.four)}>
            Four
          </div>
          <div className="five columns" onClick={(e) => this.props.handleSelectedStation(this.props.presets.five)}>
            Five
          </div>
        </div>
      </div>
    );
  }
}

export default SetPresets;