import React, {Component} from 'react';

import { shuffle } from '../util/ClientFunctions.jsx';

import AudioPlayer from './AudioPlayer.jsx';
import StationList from './StationList.jsx';


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
        volume: 1,
        isPlaying: false,
        isPaused: true,
        isLoading: false
      }
    },

    this.handleSelectedStation = this.handleSelectedStation.bind(this);
    this.seekStation = this.seekStation.bind(this);
    this.generateRandomStationId = this.generateRandomStationId.bind(this);
    this.loadStations = this.loadStations.bind(this);
    this.scrollListener = this.scrollListener.bind(this);
    this.findColor = this.findColor.bind(this);
    this.setStateSelectedStation = this.setStateSelectedStation.bind(this);
    this.playPause = this.playPause.bind(this);
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
    let station = {
      id: details.id,
      name: details.name,
      audioFeed: details.audioFeed,
      streamType: details.streamType
    };
    let test = { key: 'value', tester: 'test' };
    localStorage.setItem('key', JSON.stringify(station)); //sets the localStorage to the station before setting the this.State to the station
    this.setState({
      selectedStation: station
    });
    document.getElementById("player").load();
    this.playPause();
  }

  playPause() {
    console.log("You hit the button.")
    let player = document.getElementById("player");
    if (this.state.playState.isPaused) {
      player.play();
      console.log("We're playing now.")
      this.setState({
        playState: {
          isPlaying: true,
          isPaused: false,
        }
      })

    } else if (this.state.playState.isPlaying) {
      player.pause();
      console.log("We're paused now.")
      this.setState({
        playState: {
          isPlaying: false,
          isPaused: true,
        }
      })
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
      console.log(station);

      // Checks to see if the seek matches the currently playing station.
      if (randomStationId === this.state.selectedStation.id) {
        this.seekStation();
        return;

        // Plays the seeked station.
      } else if (randomStationId === station.id) {
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

  componentDidMount() {
    this.loadStations();
    this.scrollListener();
    this.setStateSelectedStation();
  }

  render() {
    return (
      <div className="app-container" style={{ backgroundColor: this.findColor() }}>
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
            activeStation={ this.state.selectedStation.id } playState={ this.state.playState } />
        <footer>
           <AudioPlayer stationFeed={ this.state.selectedStation } seekStation={ this.seekStation }
           playPause={ this.playPause } playState={ this.state.playState } />
        </footer>
      </div>
    );
  }
}
export default App;
