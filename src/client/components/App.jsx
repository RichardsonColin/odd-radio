import React, {Component} from 'react';

import { shuffle } from '../util/ClientFunctions.jsx';

import AudioPlayer from './AudioPlayer.jsx';
import StationList from './StationList.jsx';
import Background from './Background.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.colors = ['FF81AB', 'A07BE8', '66CBFF', '5CE886', 'F6FF71'];
    this.state = {
      scrollPercent: 0,
      color: '1',
      stations: [],
      selectedStation: {
        id: "",
        name: "",
        audioFeed: "",
        streamType: ""
      },
      playState: {
        isPlaying: false,
        isPaused: true
      },
      streamLoading: false,
      expanded: false,
      expandedName: ''
    },

    this.handleSelectedStation = this.handleSelectedStation.bind(this);
    this.seekStation = this.seekStation.bind(this);
    this.generateRandomStationId = this.generateRandomStationId.bind(this);
    this.loadStations = this.loadStations.bind(this);
    this.scrollListener = this.scrollListener.bind(this);
    this.findColor = this.findColor.bind(this);
    this.setStateSelectedStation = this.setStateSelectedStation.bind(this);
    this.playPause = this.playPause.bind(this);
    this.onLoadStart = this.onLoadStart.bind(this);
    this.onCanPlay = this.onCanPlay.bind(this);
    this.findColor = this.findColor.bind(this);
    this.findStationExpandInfo = this.findStationExpandInfo.bind(this);
    this.hideStationInfo = this.hideStationInfo.bind(this);
  }

  // Initial API request to build up station collection object.
  loadStations() {
    fetch('/api/stations', { mode: 'no-cors' })
      .then((response) => {
        return response.json()
      }).then((json) => {
        this.setState({ stations: shuffle(json) })
        console.log('parsed json', json)
      }).catch((ex) => {
        console.log('parsing failed', ex)
      });
  }

  // Takes a selected station and sets it in app level state, plays it.
  handleSelectedStation(details) {
    const player = document.getElementById("player");

    let station = {
      id: details.id,
      name: details.name,
      audioFeed: details.audioFeed,
      streamType: details.streamType
    };
    let test = { key: 'value', tester: 'test' };
    localStorage.setItem('key', JSON.stringify(station)); //sets the localStorage to the station before setting the this.State to the station

    if(station.id === this.state.selectedStation.id) {
      this.playPause();
    } else {
      this.setState({
        playState: {
          isPlaying: false,
          isPaused: true
        },
        selectedStation: station
        }, () => {
          player.load();
          this.playPause();
      });
    }
  }

  //function which sets the playState of play and pause and
  //turns the player on and off
  playPause() {
    const player = document.getElementById("player");
    if (this.state.playState.isPaused) {


      this.setState({
        playState: {
          isPlaying: true,
          isPaused: false
        }
      }, () => { player.play(); });
    } else if (this.state.playState.isPlaying) {

      this.setState({
        playState: {
          isPlaying: false,
          isPaused: true
        }
      }, () => { player.pause(); });
    }
  }

  onLoadStart(e) {
    // console.log('e', e);
    // console.log('in load event');
    this.setState({
      streamLoading: true
    })
  }

  onCanPlay(e) {
    // console.log('e', e);
    // console.log('in play event');
    this.setState({
      streamLoading: false
    })
  }

  onSpaceBarPress(event) {
      console.log("In space bar function");
      if (event.key === ' '){
        event.preventDefault();
        console.log("SPACE PRESSED");
        this.playPause();

    }
  }

  // Helper function for seek functionality.
  generateRandomStationId() {
    const seekLength = this.state.stations.length - 1;
    return Math.floor(Math.random() * seekLength);
  }

  // Play random station.
  seekStation() {
    const randomStationId = this.generateRandomStationId();

    for (const station of this.state.stations) {

      // Checks to see if the seek matches the currently playing station.
      if (randomStationId === this.state.selectedStation.id) {
        this.seekStation();
        return;

        // Plays the seeked station.
      } else if (randomStationId === station.id) {
          console.log('inside seekstation - ',station);

          const seekedStation = {
            id: station.id,
            name: station.name,
            audioFeed: station.audio_feed,
            streamType: station.stream_type
          };

          this.handleSelectedStation(seekedStation);
      }
    }
  }

  findColor() {
    const colorIndex = Math.floor(this.state.scrollPercent * this.colors.length);
    return this.colors[colorIndex];
  }

  scrollListener() {
    const scrollListen = window.addEventListener('scroll', () => {
      const percent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      this.setState({ scrollPercent: percent });
    });
  }

  // Detects last listened station from users local storage, sets it in app state.
  setStateSelectedStation() {
    if (JSON.parse(localStorage.getItem('key'))) {
      this.setState({
        selectedStation: JSON.parse(localStorage.getItem('key'))
      });
    }
  }

//finds the station container based on stationName and expands the info-container and scrolls to the station container
findStationExpandInfo(stationName) {
  const stationDiv = document.getElementById(stationName);

  this.setState({ expanded: true, expandedName: stationName}, () => {
    stationDiv.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  });
}

hideStationInfo() { //hides the info-container
  this.setState({
    expanded: false
  });
}

  componentDidMount() {
    this.loadStations();
    this.scrollListener();
    this.setStateSelectedStation();
    window.addEventListener("keydown", this.onSpaceBarPress.bind(this));
  }

  render() {
    return (
      <div>
        <Background findColor={ this.findColor } />
        <header>
        <div className="container title-container">
            <div className="row title-row border">
              <div className="six columns description">
                <div className="site-subtitle">
                  <h3>Strange sounds from campus and community radio across Canada.</h3>
                </div>
              </div>
              <div className="three columns brand-name">
                <h1>oddrad.io</h1>
              </div>
            </div>
          </div>
        </header>
          <StationList handleSelectedStation={ this.handleSelectedStation } stations={ this.state.stations }
            activeStation={ this.state.selectedStation.id } playState={ this.state.playState }
            streamLoading={ this.state.streamLoading }
            findStationExpandInfo={this.findStationExpandInfo}
            hideStationInfo={this.hideStationInfo}
            expandedState={this.state.expanded} expandedName={this.state.expandedName}/>
        <footer>
           <AudioPlayer stationFeed={ this.state.selectedStation } seekStation={ this.seekStation }
           playPause={ this.playPause } streamLoading={ this.state.streamLoading } playState={ this.state.playState }
           onLoadStart={ this.onLoadStart } onCanPlay={ this.onCanPlay } findStationExpandInfo={this.findStationExpandInfo}/>
        </footer>
      </div>
    );
  }
}
export default App;
