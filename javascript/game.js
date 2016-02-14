'use strict';

(function () {
  var GOL = window.GOL = window.GOL || {};

  var makeStateMatrix = GOL.makeStateMatrix;

  var GAME_PROTOTYPE = {
    start: function () {
      setInterval(this.tick.bind(this), 1000/4)
    },

    tick: function () {
      this.advanceState();
      this.draw();
    },

    draw: function () {
      this.stateMatrix.forEach(function (row, rowIndex) {
        row.forEach(function (elementState, columnIndex) {
          var element = document.querySelector('.row' + rowIndex + '.column' + columnIndex)

          if (elementState) {
            element.classList.add("turned-on")
          } else {
            element.classList.remove("turned-on")
          }
        })
      })
    },

    advanceState: function () {
      var self = this;
      var nextStateMatrix = makeStateMatrix();

      self.stateMatrix.forEach(function (row, rowIndex) {
        row.forEach(function (elementState, columnIndex) {
          nextStateMatrix[rowIndex][columnIndex] = self.willBeTurnedOn(self.stateMatrix, rowIndex, columnIndex);
        })
      })

      self.stateMatrix = nextStateMatrix;
    },

    willBeTurnedOn: function (stateMatrix, rowIndex, columnIndex) {
      var livingNeighbors = this.livingNeighbors(stateMatrix, rowIndex, columnIndex)
      var currentState = stateMatrix[rowIndex][columnIndex]
      var nextState

      if (livingNeighbors < 2) {
        nextState = false;
      } else if (livingNeighbors === 2) {
        nextState = currentState;
      } else if (livingNeighbors === 3) {
        nextState = true;
      } else {
        nextState = false;
      }

      return nextState;
    },

    livingNeighbors: function (stateMatrix, rowIndex, columnIndex) {
      var livingNeighbors = 0;

      [-1, 0, 1].forEach(function (rowOffset) {
        [-1, 0, 1].forEach(function (columnOffset) {
          var isCurrentCell = rowOffset === 0 && columnOffset === 0;

          var row = stateMatrix[rowIndex + rowOffset];
          var cellState = row && row[columnIndex + columnOffset];

          if (!isCurrentCell && cellState) {
            livingNeighbors++;
          }
        })
      })

      return livingNeighbors;
    }
  }

  GOL.Game = {
    create: function () {
      /* instantiate instance */
      var game = Object.create(GAME_PROTOTYPE);

      /* initialization crap */
      game.stateMatrix = makeStateMatrix();

      /* return instance */
      return game;
    }
  }
})()
