'use strict';

(function () {
  /* localize namespace */
  var GOL = window.GOL = window.GOL || {};

  /* localize globalish variables */
  var Game = GOL.Game;
  var populateGrid = GOL.populateGrid;

  /* do stuff */
  populateGrid();

  var game = Game.create();
  game.start();
})();
