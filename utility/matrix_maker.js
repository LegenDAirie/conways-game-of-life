'use strict';

(function () {
  var GOL = window.GOL = window.GOL || {};

  var NUMBER_OF_ROWS = 32;
  var NUMBER_OF_COLUMNS = 32;

  GOL.makeStateMatrix = function () {
    var stateMatrix = [];

    for (var rowIndex = 0; rowIndex < NUMBER_OF_ROWS; rowIndex++) {
      stateMatrix[rowIndex] = [];
      for (var columnIndex = 0; columnIndex < NUMBER_OF_COLUMNS; columnIndex++) {
        stateMatrix[rowIndex][columnIndex] = Math.random() >= 0.5;
      };
    }

    return stateMatrix;
  }
})()
