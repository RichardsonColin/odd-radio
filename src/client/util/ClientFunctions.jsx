import React, { Component } from 'react';

export const onStationSelect = function(event) {
    this.props.handleSelectedStation(this.state.name, this.state.stream, this.state.type);
    
}

export const onInfoSelect = function(event) {
    console.log('---- onInfoSelect ----', this);
    let infoId = this.props.name
    let info = document.getElementById(infoId);
    console.log('info.className', info.className)
    if (info.className === "container station-container content") {
        info.className = "";
        info.className = "container station-container";
    } else {
        info.className = "";
        info.className = "container station-container content";
    }
}