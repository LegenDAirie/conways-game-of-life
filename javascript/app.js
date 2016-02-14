'use strict';

(function () {
  var GOL = window.GOL = window.GOL || {};

  var NUMBER_OF_ROWS = 32;
  var NUMBER_OF_COLUMNS = 32;

  GOL.populateGrid = function () {

    var grid = document.getElementById('fancy-grid-thing');

    var makeRow = function () {
      var row = document.createElement('div');

      row.classList.add('row');
      row.classList.add('clearfix');

      return row;
    };

    var makeGridElement = function() {
      var gridElement = document.createElement('li');

      gridElement.classList.add('grid-element');

      return gridElement;
    };

    for (var rowIndex = 0; rowIndex < NUMBER_OF_ROWS; rowIndex++) {
      var row = makeRow();

      for (var columnIndex = 0; columnIndex < NUMBER_OF_COLUMNS; columnIndex++) {
        var gridElement = makeGridElement();

        row.appendChild(gridElement);
      };

      grid.appendChild(row);
    }
  }
})()
