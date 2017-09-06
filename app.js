"use strict";
var con = require('./connection');
var game = require('./game');

con.listen();
console.log('listening localhost:1111')

game.state = game.states.BEGIN;






