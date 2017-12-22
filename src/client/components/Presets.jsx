import React, { Component } from 'react';

class Presets extends Component {

  render() {
    return (
      <div className="container presets">
        <div className="center presets-title">
          { this.props.title }
        </div>
        <div className="row border">
          <div className="five columns presets-station" onClick={(e) => this.props.clickFunction(this.props.presets.one)}>
            { this.props.presets.one.name ? this.props.presets.one.name : 'One' }
          </div>
          <div className="five columns presets-station" onClick={(e) => this.props.clickFunction(this.props.presets.two)}>
            { this.props.presets.two.name ? this.props.presets.two.name : 'Two' }
          </div>
          <div className="five columns presets-station" onClick={(e) => this.props.clickFunction(this.props.presets.three)}>
            { this.props.presets.three.name ? this.props.presets.three.name : 'Three'  }
          </div>
          <div className="five columns presets-station" onClick={(e) => this.props.clickFunction(this.props.presets.four)}>
            { this.props.presets.four.name ? this.props.presets.four.name : 'Four' }
          </div>
          <div className="five columns presets-station" onClick={(e) => this.props.clickFunction(this.props.presets.five)}>
            { this.props.presets.five.name ? this.props.presets.five.name : 'Five' }
          </div>
        </div>
      </div>
    );
  }
}

export default Presets;