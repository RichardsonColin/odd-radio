import React, { Component } from 'react';

export const handleSelectedStation = function(id, name, stream, type) {
    let station = {
            id: id,
            name: name,
            stream: stream,
            type: type
        };
    let test = { key: 'value', tester: 'test'};
    localStorage.setItem('key', JSON.stringify(station)); //sets the localStorage to the station before setting the this.State to the station
    this.setState({
        selectedStation: station
    });
    this.handlePlayState();
}

export const generateRandomStationId = function() {
    const seekLength = this.state.stations.length - 1;
    return Math.floor(Math.random() * seekLength);
}

export const seekStation = function() {
    const randomStationId = this.generateRandomStationId();

    for (const station of this.state.stations) {

        // Checks to see if the seek matches the currently playing station.
        if (randomStationId === this.state.selectedStation.id) {
            this.seekStation();
            return;

            // Plays the seeked station.
        } else if (randomStationId === station.id) {
            this.handleSelectedStation(station.id, station.name, station.audio_feed, station.stream_type);
        }
    }
}

export const handlePlayState = function() {
    let player = document.getElementById("player");
    document.getElementById("player").load();

    // Displays the loading icon while the media is loading.
    player.addEventListener("loadstart", function () {
        pButton.className = "fa fa-spinner fa-pulse fa-2x fa-fw";
    });

    // Plays the audio when it is ready.
    player.addEventListener("canplaythrough", function () {
        document.getElementById("player").play();
    });

    // Changes the loading icon to a pause icon.
    player.addEventListener("playing", function () {
        pButton.className = "";
        pButton.className = "fa fa-pause fa-2x";
    });
}

// Function to take a station div selection and pass it to the app level as current player.
export const onStationSelect = function(event) {
    this.props.handleSelectedStation(this.state.id, this.state.name, this.state.stream, this.state.type);
}

// Function to show more info for statios.
export const onInfoSelect = function(event) {
    let infoId = this.props.name
    let info = document.getElementById(infoId);
    let station = document.getElementById(infoId).previousSibling;
    let chevron = event.target;
    if (info.className === "container info-container hide-class") {
        info.className = "";
        info.className = "container info-container";
        station.className += " no-opacity";
        chevron.className = "";
        chevron.className = "fa fa-chevron-up card-chevron";
    } else {
        info.className = "";
        info.className = "container info-container hide-class";
        station.className = `container station-container${this.props.stationType}`;
        chevron.className = "";
        chevron.className = "fa fa-chevron-down card-chevron";
    }
}

// Function for volume control.
export const setVolume = function(event) {
    let player = document.getElementById("player");
    player.volume = event.target.value / 100;

    console.log('inside setVolume');

    if(player.volume === 0) {
      mute.className = 'fa fa-volume-up fa-2x';

    } else {
      mute.className = 'fa fa-volume-off fa-2x';

    }
}

// Function to toggle mute
export const muteAudio = function(event) {
  let slider = document.getElementById('vol-control');
  let player = document.getElementById('player');

  if(player.volume > 0) {
    console.log(player.volume);
    this.setState({
      volume: player.volume
    })

    mute.className = 'fa fa-volume-up fa-2x';
    player.volume = 0;
    slider.value = 0;
  } else {
      mute.className = 'fa fa-volume-off fa-2x';
      player.volume = this.state.volume;
      slider.value = this.state.volume * 100;
  }
}

//sets the app's selectedStation to the localStorage which is the last radio stream to be played in this browser
export const setStateSelectedStation = function() {
    if (JSON.parse(localStorage.getItem('key'))){
        this.setState({
            selectedStation: JSON.parse(localStorage.getItem('key'))
        });
    }
}

// Function for play button triggers.
export const makeItPlay = function() {
    let player = document.getElementById("player");

    if (this.props.stationFeed.name == '') {
        this.props.seekStation();
    } else if (player.paused) {
        player.play();
        pButton.className = "";
        pButton.className = "fa fa-pause fa-2x";
    } else {
        player.pause();
        pButton.className = "";
        pButton.className = "fa fa-play fa-2x";
    }
}

export const shuffle = function (sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

export const loadStations = function() {
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


export const findColor = function() {
  const colorIndex = Math.floor(this.state.scrollPercent * this.colors.length);
  return this.colors[colorIndex];
}

export const scrollListener = function() {
  const scrollListen = window.addEventListener('scroll', () => {
    const percent = window.scrollY / ( document.body.scrollHeight - window.innerHeight );
    this.setState({ scrollPercent: percent });
  });
}



