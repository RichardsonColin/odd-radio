import React, { Component } from 'react';

export const handleSelectedStation = function(id, name, stream, type) {
    this.setState({
        selectedStation: {
            id: id,
            name: name,
            stream: stream,
            type: type
        }
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
    console.log('---- onInfoSelect ----', this);
    let infoId = this.props.name
    let info = document.getElementById(infoId);
    console.log('info.className', info.className);
    if (info.className === "container station-container content") {
        info.className = "";
        info.className = "container station-container";
    } else {
        info.className = "";
        info.className = "container station-container content";
    }
}

// Function for volume control.
export const setVolume = function(event) {
    let player = document.getElementById("player");
    player.volume = event.target.value / 100
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
    fetch('/api/stations')
        .then((response) => {
            return response.json()
        }).then((json) => {
            this.setState({ stations: shuffle(json) })
            console.log('parsed json', json)
        }).catch((ex) => {
            console.log('parsing failed', ex)
        });
}

