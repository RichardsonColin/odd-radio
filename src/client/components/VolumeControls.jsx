import React, { Component } from 'react';
import MuteButton from './MuteButton.jsx';

class VolumeControls extends Component {
  render() {
    return (
      <div>
        <MuteButton volume={ this.props.volume } clickFunction={ this.props.muteAudio } />
        <input id="vol-control" type="range" min={0} max={100} step={1} 
          value={ this.props.volume * 100 } 
          onInput={ this.props.setVolume } 
          onChange={ this.props.setVolume }>
        </input>
      </div>
    )
  }
}
export default VolumeControls;