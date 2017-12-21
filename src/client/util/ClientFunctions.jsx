import React, { Component } from 'react';

export const shuffle = function (sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

export const findStationExpandInfo = function (stationName) {
  console.log('stationName:', stationName);
  const stationDiv = document.getElementById(stationName);
  console.log('stationDiv:', stationDiv);
  stationDiv.scrollIntoView(true);

}