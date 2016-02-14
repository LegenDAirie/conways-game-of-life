'use strict';

(function () {
  var GOL = window.GOL = window.GOL || {};

  var makeStateMatrix = GOL.makeStateMatrix;

  var GAME_PROTOTYPE = {
    start: function () {
      console.log("bad words")
      this.tick();
    },

    tick: function () {
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
