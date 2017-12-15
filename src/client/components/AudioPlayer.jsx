import React, {Component} from 'react';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="player-station-name">NAME</div>
        <audio controls="controls" preload="none">
          <source src="" type="audio/mp3" />
        </audio>
        <div className="seek-button"><button>seek</button></div>
      </div>
    );
  }
}
export default AudioPlayer;