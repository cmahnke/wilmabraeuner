import "./jquery"

window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

import Headroom from 'headroom.js';
window.Headroom = Headroom;

(function ($) {
  'use strict';

  var options = {};
  var header = new Headroom(document.querySelector("header"), options);
  header.init();

})(jQuery);

/*
$(document).ready(function() {

  var options = {};
  var header = new Headroom(document.getElementById('header'), options);
  header.init();

});


*/
