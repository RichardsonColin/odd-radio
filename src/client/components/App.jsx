import React, {Component} from 'react';
import AudioPlayer from './AudioPlayer.jsx';
import StationList from './StationList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.colors = [
      'red', 'blue', 'green'
    ];
    this.state = {
      scrollPercent: 0,
      color: '1',
      stations: [],
      selectedStation: {
        name: "",
        stream: "",
        type: ""
      }
    },
    this.handlePlayState = this.handlePlayState.bind(this);
    this.handleSelectedStation = this.handleSelectedStation.bind(this);
    this.seekStation = this.seekStation.bind(this);
    this.generateRandomStationId = this.generateRandomStationId.bind(this);
  }

  findColor() {
    const colorIndex = Math.floor(this.state.scrollPercent * this.colors.length);
    return this.colors[colorIndex];
  }

  handleSelectedStation(name, stream, type) {
    this.setState({
      selectedStation: {
        name: name,
        stream: stream,
        type: type
      }
    });
    this.handlePlayState();
  }

  handlePlayState() {
    let player = document.getElementById("player");
    document.getElementById("player").load();

    // Displays the loading icon while the media is loading.
    player.addEventListener("loadstart", function() {
      pButton.className = "fa fa-spinner fa-pulse fa-2x fa-fw";
    });

    // Plays the audio when it is ready.
    player.addEventListener("canplaythrough", function() {
      document.getElementById("player").play();
    });

    // Changes the loading icon to a pause icon.
    player.addEventListener("playing", function() {
      pButton.className = "";
      pButton.className = "fa fa-pause";
    });
  }

  generateRandomStationId() {
    const seekLength = this.state.stations.length - 1;
    return Math.floor(Math.random() * seekLength);
  }

  seekStation() {
    const randomStationId = this.generateRandomStationId();

    for(const station of this.state.stations) {

      // Checks to see if the seek matches the currently playing station.
      if(randomStationId === this.state.stations.id) {
        seekStation();

      // Plays the seeked station.
      } else if(randomStationId === station.id) {
          console.log('inside seek', station.name);
          this.handleSelectedStation(station.name, station.audio_feed, station.stream_type);
      }
    }
  }

  componentDidMount() {

    window.addEventListener('scroll', () => {
      const percent = window.scrollY / ( document.body.scrollHeight - window.innerHeight );
      this.setState({ scrollPercent: percent });
    });

    function shuffle(sourceArray) {
      for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
      }
      return sourceArray;
    }

    fetch('/api/stations')
      .then((response) => {
        return response.json()
      }).then((json) => {
        this.setState({ stations: shuffle(json) })
        console.log('parsed json', json)
      }).catch((ex) => {
        console.log('parsing failed', ex)
      });
    console.log("Mounted");
  }

  render() {

    return (
      <div className="app-container" style={{ backgroundColor: this.findColor() }}>
        <header>
          <h1>oddrad.io</h1>
          <h3>A curated collection of the odd sounds of Canadian college radio.</h3>
        </header>
          <StationList handleSelectedStation={ this.handleSelectedStation } stations={ this.state.stations } />
        <footer>
           <AudioPlayer stationFeed={ this.state.selectedStation } seekStation={ this.seekStation } />
        </footer>
      </div>
    );
  }
}
export default App;
