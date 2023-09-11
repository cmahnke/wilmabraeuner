import "./jquery";

import Headroom from 'headroom.js';
window.Headroom = Headroom;

/* See https://github.com/rgalus/sticky-js */
window.Sticky = require('sticky-js');

import { addConsent } from './iframe-consent';
import { audioplayer } from './audioplayer';
import { compare_view } from './compare_view';

import 'bootstrap/js/dist/tab';

document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  var sticky = new Sticky('#head');

  var options = {} /*{offset: {down: '3em'}}*/;
  var header = new Headroom(document.querySelector("header"), options);
  header.init();

  /* Bootstrap */
  document.querySelectorAll('button[data-bs-toggle="tab"]').forEach((tabEl) => {
    tabEl.addEventListener('shown.bs.tab', function (event) {
      var paneSelector = event.target.getAttribute('data-bs-target');
      var map;
      if (document.querySelector(paneSelector + " div[id]") !== null) {
        map = document.querySelector(paneSelector + " div[id]").data;
        if (typeof map.updateSize === 'function') {
          var iiifSource = map.getLayers().item(0).getSource();
          var iiifExtent = iiifSource.getTileGrid().getExtent();
          map.updateSize();
          map.getView().fit(iiifExtent);
        }
      }
    })
  })
});
