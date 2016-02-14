'use strict';

(function () {
  var GOL = window.GOL = window.GOL || {};

  var GAME_PROTOTYPE = {
    start: function () {
      console.log("bad words")
    },

    tick: function () {
    }
  }

  GOL.Game = {
    create: function () {
      var game = Object.create(GAME_PROTOTYPE);

      return game
    }
  }
})()
