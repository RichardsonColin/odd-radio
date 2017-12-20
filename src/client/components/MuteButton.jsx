import React, { Component } from 'react';

class MuteButton extends Component {
  render() {
    if (this.props.volume > 0) {
      return (
        <div>
          <i id="mute" className="fa fa-volume-up fa-2x" onClick={(e) => this.props.clickFunction() }></i>
        </div>
      )
    } else {
      return(
        <div>
          <i id="mute" className="fa fa-volume-off fa-2x" onClick={(e) => this.props.clickFunction()}></i>
        </div>
      )
    }
  }
}
export default MuteButton;