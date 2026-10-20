import Headroom from 'headroom.js';
import Sticky from 'sticky-js';
window.Headroom = Headroom;

/* See https://github.com/rgalus/sticky-js */
window.Sticky = Sticky;

/* Side-effect imports: register the window globals (window.audioplayer)
   for partial-based usage the shortcode helper can't detect */
import './audioplayer.ts';
/* TODO: Register the img-comparison-slider web component here once its JS
   wiring is decided (the base theme provides the dependency) */

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
