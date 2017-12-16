import React, {Component} from 'react';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStationName: '',
      stream: 'http://onair.cfcr.ca/hifi.mp3',
      streamType: ''
    }
    this.makeItPlay = this.makeItPlay.bind(this);
  }

<<<<<<< HEAD
=======
  makeItPlay() {
    let player = document.getElementById("player")
    if (player.paused) {
      player.play();
      pButton.className = "";
      pButton.className = "fa fa-pause";
    } else {
      player.pause();
      pButton.className = "";
      pButton.className = "fa fa-play";
    }
  
  }

>>>>>>> 9066ce045fd7946a4e8b29d808eeabc0fd82ae48

  render() {
    console.log('inside AudioPlayer', this.state.stream);
    return (
      <div>
<<<<<<< HEAD
        <div className="player-station-name"> { this.props.currentStationName } </div>
        <audio controls="controls" ref="audio" id="player">
          <source src={ this.props.stationFeed.stream } type={ 'audio/mp3' } />
=======
        <audio id="player">
          <source src={ this.props.stationFeed.stream } type={ this.props.stationFeed.type } />
>>>>>>> 9066ce045fd7946a4e8b29d808eeabc0fd82ae48
        </audio>
        <div>
          <div className="player-station-name"> Current Station: { this.props.stationFeed.name } </div>
          <i id="pButton" className="fa fa-play" aria-hidden="true" onClick={ this.makeItPlay } ></i>
          <div className="seek-button" onClick={ this.props.seekStation } ><button>seek</button></div>
        </div>
      </div>
    );
  }
}
export default AudioPlayer;