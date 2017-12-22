import React, { Component } from 'react';

class SetPresets extends Component {

  render() {
    return (
      <div className="container presets">
        <div className="center presets-title">
          { this.props.title }
        </div>
        <div className="row border">
          <div className="five columns presets-station" onClick={(e) => this.props.clickFunction(this.props.details, 'one')}>
            1: {this.props.presets.one.name ? this.props.presets.one.name : 'Empty'}
          </div>
          <div className="five columns presets-station" onClick={(e) => this.props.clickFunction(this.props.details, 'two')}>
            2: {this.props.presets.two.name ? this.props.presets.two.name : 'Empty'}
          </div>
          <div className="five columns presets-station" onClick={(e) => this.props.clickFunction(this.props.details, 'three')}>
            3: {this.props.presets.three.name ? this.props.presets.three.name : 'Empty'}
          </div>
          <div className="five columns presets-station" onClick={(e) => this.props.clickFunction(this.props.details, 'four')}>
            4: {this.props.presets.four.name ? this.props.presets.four.name : 'Empty'}
          </div>
          <div className="five columns presets-station" onClick={(e) => this.props.clickFunction(this.props.details, 'five')}>
            5: {this.props.presets.five.name ? this.props.presets.five.name : 'Empty'}
          </div>
        </div>
      </div>
    );
  }
}

export default SetPresets;