import "./jquery"

window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

import Headroom from 'headroom.js';
window.Headroom = Headroom;

import { addConsent } from './iframe-consent';
import { audioplayer } from './audioplayer';

$( document ).ready(function() {
  'use strict';

  var options = {} /*{offset: {down: '3em'}}*/;
  var header = new Headroom(document.querySelector("header"), options);
  header.init();
});
