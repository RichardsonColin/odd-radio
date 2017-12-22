import React, { Component } from 'react';

class Presets extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="container presets">
        <div className="center presets-title">
          { this.props.title }
        </div>
        <div className="row border">
          <div className="five columns presets-station" onClick={(e) => this.props.clickFunction(this.props.presets.one)}>
            1: { this.props.presets.one.name ? this.props.presets.one.name : 'Empty' }
          </div>
          <div className="five columns presets-station" onClick={(e) => this.props.clickFunction(this.props.presets.two)}>
            2: { this.props.presets.two.name ? this.props.presets.two.name : 'Empty' }
          </div>
          <div className="five columns presets-station" onClick={(e) => this.props.clickFunction(this.props.presets.three)}>
            3: { this.props.presets.three.name ? this.props.presets.three.name : 'Empty'  }
          </div>
          <div className="five columns presets-station" onClick={(e) => this.props.clickFunction(this.props.presets.four)}>
            4: { this.props.presets.four.name ? this.props.presets.four.name : 'Empty' }
          </div>
          <div className="five columns presets-station" onClick={(e) => this.props.clickFunction(this.props.presets.five)}>
            5: { this.props.presets.five.name ? this.props.presets.five.name : 'Empty' }
          </div>
        </div>
      </div>
    );
  }
}

export default Presets;