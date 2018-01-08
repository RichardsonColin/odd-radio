import React, {Component} from 'react';

import { shuffle } from '../util/ClientFunctions.jsx';

import AudioPlayer from './AudioPlayer.jsx';
import StationList from './StationList.jsx';
import Background from './Background.jsx';
import Ticker from './Ticker.jsx';
import Presets from './Presets.jsx';


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
        streamType: "",
        frequency: "",
        city: "",
        province: ""
      },
      playState: {
        isPlaying: false,
        isPaused: true
      },
      streamLoading: false,
      presets: {
        one: {},
        two: {},
        three: {},
        four: {},
        five: {}
      },
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
    this.savePreset = this.savePreset.bind(this);
    this.setStateFaveStations = this.setStateFaveStations.bind(this);
    this.directStationLoad = this.directStationLoad.bind(this);
  }

  // Initial API request to build up station collection object.
  loadStations() {
    fetch('/api/stations', { mode: 'no-cors' })
      .then((response) => {
        return response.json()
      }).then((json) => {
        this.setState({ stations: shuffle(json) })
      }).then(() => {
        this.directStationLoad();
      }).catch((ex) => {
        console.log('parsing failed', ex)
      });

  }

  // Takes a selected station and sets it in app level state, plays it.
  handleSelectedStation(details) {

    if (details.name == undefined) {
      return;
    }

    const player = document.getElementById("player");

    let station = {
      id: details.id,
      name: details.name,
      audioFeed: details.audioFeed,
      streamType: details.streamType,
      frequency: details.frequency,
      city: details.city,
      province: details.province
    };
    let test = { key: 'value', tester: 'test' };
    localStorage.setItem('last-listened', JSON.stringify(station)); //sets the localStorage to the station before setting the this.State to the station

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

  // Toggle player between play and pause state.
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

  // Listener for stream loading.
  onLoadStart(e) {
    this.setState({
      streamLoading: true
    })
  }

  // Listener for stream readiness.
  onCanPlay(e) {
    this.setState({
      streamLoading: false
    })
  }

  // Play and pause on spacebar. 
  onSpaceBarPress(event) {
      console.log("In space bar function");
      if (event.key === ' '){
        event.preventDefault();
        console.log("SPACE PRESSED");
        this.playPause();

    }
  }

  // Sets station into presets in local storage.
  savePreset(details, position) {
    let presets = this.state.presets;
    presets[position] = details

    this.setState({
      presets
    }, () => {
      localStorage.setItem('presets', JSON.stringify(this.state.presets)); //sets the localStorage to the station before setting the this.State to the station
    });

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
          const seekedStation = {
            id: station.id,
            name: station.name,
            audioFeed: station.audio_feed,
            streamType: station.stream_type,
            frequency: station.frequency,
            city: station.city,
            province: station.province
          };

          this.handleSelectedStation(seekedStation);
      }
    }
  }

  // Background change function.
  findColor() {
    const colorIndex = Math.floor(this.state.scrollPercent * this.colors.length);
    return this.colors[colorIndex];
  }

  // Background change, detects scrolling.
  scrollListener() {
    const scrollListen = window.addEventListener('scroll', () => {
      const percent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      this.setState({ scrollPercent: percent });
    });
  }

  // Detects last listened station from users local storage, sets it in app state.
  setStateSelectedStation() {
    if (JSON.parse(localStorage.getItem('last-listened'))) {
      this.setState({
        selectedStation: JSON.parse(localStorage.getItem('last-listened'))
      });
    }
  }

  // Retrieve favourite stations from user local storage.
  setStateFaveStations() {
    if (JSON.parse(localStorage.getItem('presets'))) {
      this.setState({
        presets: JSON.parse(localStorage.getItem('presets'))
      });
    }
  }

  // Finds the station container based on stationName and expands the info-container
  //  and scrolls to the station container
  findStationExpandInfo(stationName, stationFeed) {
    // StationName ? let station = StationName
    if (stationName == null) {
      var station = stationFeed;
    } else {
      var station = stationName;
    }
    const stationDiv = document.getElementById(station);

    this.setState({ expanded: true, expandedName: station}, () => {
      stationDiv.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
  }

  // Hides the info-container
  hideStationInfo() { 
    this.setState({
      expanded: false
    });
  }

  // Checks the window.location.pathname and compares it to the database. 
  // If it matches the station is pre-loaded on page render.
  directStationLoad() { 
    var pathname = window.location.pathname.replace('/', '').replace('/', '').toUpperCase();
    const stations = this.state.stations;

    for (let station of stations){
      if (pathname === station.name) {
        station['audioFeed'] = station.audio_feed;
        station['streamType'] = station.stream_type;
        this.handleSelectedStation(station);
      }
    }
  }

  componentDidMount() {
    this.loadStations();
    this.scrollListener();
    this.setStateSelectedStation();
    this.setStateFaveStations();
    window.addEventListener("keydown", this.onSpaceBarPress.bind(this));
  }

  render() {
    return (
      <div>
        <Background findColor={ this.findColor } />
        <header>
        <Ticker selectedStation={this.state.selectedStation} />
        <div className="container title-container">
            <div className="row title-row border">
              <div className="six columns description">
                <div className="site-subtitle">
                  <h3>Strange sounds from campus and community radio across Canada.</h3>
                </div>
              </div>
              <div className="three columns brand-name">
                <h1 id="brand-name">oddrad.io</h1>
              </div>
            </div>
          </div>
        </header>
          <StationList handleSelectedStation={ this.handleSelectedStation } stations={ this.state.stations }
            activeStation={ this.state.selectedStation.id } playState={ this.state.playState }
            streamLoading={ this.state.streamLoading }
            findStationExpandInfo={this.findStationExpandInfo}
            hideStationInfo={this.hideStationInfo}
            expandedState={this.state.expanded} expandedName={this.state.expandedName} presets={this.state.presets} savePreset={this.savePreset} />
        <footer>
          <AudioPlayer stationFeed={ this.state.selectedStation } seekStation={ this.seekStation }
          playPause={ this.playPause } streamLoading={ this.state.streamLoading } playState={ this.state.playState }
          onLoadStart={ this.onLoadStart } onCanPlay={ this.onCanPlay } findStationExpandInfo={this.findStationExpandInfo}
          presets={this.state.presets} handleSelectedStation={this.handleSelectedStation} />
        </footer>
      </div>
    );
  }
}
export default App;
