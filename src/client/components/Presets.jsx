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
          <div className={"five columns " + this.props.Style} onClick={(e) => this.props.clickFunction(this.props.presets.one)}>
            <p>1: { this.props.presets.one.name ? this.props.presets.one.name : 'Empty' }</p>
          </div>
          <div className={"five columns " + this.props.Style} onClick={(e) => this.props.clickFunction(this.props.presets.two)}>
            <p>2: { this.props.presets.two.name ? this.props.presets.two.name : 'Empty' }</p>
          </div>
          <div className={"five columns " + this.props.Style} onClick={(e) => this.props.clickFunction(this.props.presets.three)}>
            <p>3: { this.props.presets.three.name ? this.props.presets.three.name : 'Empty'  }</p>
          </div>
          <div className={"five columns " + this.props.Style} onClick={(e) => this.props.clickFunction(this.props.presets.four)}>
            <p>4: { this.props.presets.four.name ? this.props.presets.four.name : 'Empty' }</p>
          </div>
          <div className={"five columns " + this.props.Style} onClick={(e) => this.props.clickFunction(this.props.presets.five)}>
            <p>5: { this.props.presets.five.name ? this.props.presets.five.name : 'Empty' }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Presets;