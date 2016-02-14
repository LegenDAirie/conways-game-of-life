'use strict'

var GAME_PROTOTYPE = {
  start: function () {
    console.log("bad words")
  },

  tick: function () {
  }
}

var Game = {
  create: function () {
    game = Object.create(GAME_PROTOTYPE);

    return game
  }
}
