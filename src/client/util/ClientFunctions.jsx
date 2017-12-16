import React, { Component } from 'react';

// Function to take a station div selection and pass it to the app level as current player.
export const onStationSelect = function(event) {
    this.props.handleSelectedStation(this.state.name, this.state.stream, this.state.type);
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

