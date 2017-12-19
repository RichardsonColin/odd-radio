import React, {Component} from 'react';
import { handleSelectedStation, handlePlayState, seekStation, generateRandomStationId, loadStations, findColor, scrollListener, setStateSelectedStation, muteAudio, lastClickedVolume } from '../util/ClientFunctions.jsx';


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
        stream: "",
        type: ""
      },
      player: {
        volume: 1,
        isPlaying: false,
        isPaused: true,
        isLoading: false
      }
    },

    this.handlePlayState = handlePlayState.bind(this);
    this.handleSelectedStation = handleSelectedStation.bind(this);
    this.seekStation = seekStation.bind(this);
    this.generateRandomStationId = generateRandomStationId.bind(this);
    this.loadStations = loadStations.bind(this);
    this.scrollListener = scrollListener.bind(this);
    this.findColor = findColor.bind(this);
    this.setStateSelectedStation = setStateSelectedStation.bind(this);
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
          <StationList handleSelectedStation={ this.handleSelectedStation } stations={ this.state.stations }/>
        <footer>
           <AudioPlayer stationFeed={ this.state.selectedStation } seekStation={ this.seekStation } />
        </footer>
      </div>
    );
  }
}
export default App;
