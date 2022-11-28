import "./jquery"

window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

import Headroom from 'headroom.js';
window.Headroom = Headroom;

$( document ).ready(function() {
  'use strict';

  var options = {};
  var header = new Headroom(document.querySelector("header"), options);
  header.init();
});
