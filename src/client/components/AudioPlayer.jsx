import React, {Component} from 'react';
import { setVolume, makeItPlay, muteAudio, lastClickedVolume} from '../util/ClientFunctions.jsx';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: ''
    },
    this.makeItPlay = makeItPlay.bind(this);
    this.setVolume = setVolume.bind(this);
    this.muteAudio = muteAudio.bind(this);
  }

  render() {
    return (
      <div>
        <audio id="player" >
          <source src={ this.props.stationFeed.stream } type={ this.props.stationFeed.type } />
        </audio>
        <div>
          <div className="player-station-name"> Current Station: { this.props.stationFeed.name } </div>
          <div className="container player-container">
            <div className="row player-row border">
              <div className="three columns">
                <i id="pButton" className="fa fa-play fa-2x" onClick={ this.makeItPlay } ></i>
              </div>
              <div className="three columns">
                <input id="vol-control" type="range" min={ 0 } max={ 100 } step={ 1 } onClick={this.lastClickedVolume} onInput={ this.setVolume } onChange={ this.setVolume }></input>
              </div>
              <div className="three columns">
                <i className="fa fa-random fa-2x seek-button" onClick={this.props.seekStation} ></i>
                <i id="loader" className="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
              </div>
              <div className="three columns">
                <i id="mute" className="fa fa-volume-off fa-2x" onClick={ this.muteAudio }></i>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default AudioPlayer;