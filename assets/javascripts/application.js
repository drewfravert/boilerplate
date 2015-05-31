/*
============================================================
  application.js
  ==============

  Module: App
  Dependencies:
  - jQuery
  - Modernizr
============================================================
*/

// enable strict mode
'use strict';

(function($) {

  // this is a bit of a hack, unfortunately
  if (navigator.userAgent.match(/(?:iPhone|iPad|iPod|Android|IEMobile)/i) !== null) {
    $('html').addClass('is-mobile');
  }

  /*
  ============================================================
    Global App Objects
  ============================================================
  */

  var that, m, s,
      app = {

    /*
    ============================================================
      Global Models
    ============================================================
    */

    models: {

      // page scope
      ps: {},

      // global settings
      globals: {
        debug: false
      },

      // browser information
      browser: {
        isMobile: false,
        supports: {}
      },

      // view context
      context: {
        // page: document.pageScope.page,
        // view: document.pageScope.view,
        // locale: document.pageScope.locale,
        authToken: $('meta[name="csrf-token"]').attr('content')
      },

      // user information
      user: {},

      // global constants
      constants: {},

      // click event type
      clickEvent: '',

    },

    /*
    ============================================================
      Global Selectors
    ============================================================
    */

    selectors: {},

    /*
    ============================================================
      Global Methods
    ============================================================
    */

    preInit: function() {

      // launch the application
      that.init();

    },
    init: function() {},
    initModal: function() {},
    initRegistrationForm: function() {},
    bindModal: function() {},
    bindRegistrationForm: function() {},

    /*
    ============================================================
      Helper Methods
    ============================================================
    */

    _loadAssets: function() {},
    _repairBrokenImages: function() {},

    /*
    ============================================================
      Utility Methods
    ============================================================
    */

    _debug: function() {},
    _sessionStorage: function() {},
    _localStorage: function() {},

    /*
    ============================================================
      Tracking Methods
    ============================================================
    */

    _initTracking: function() {},
    _pushTrackingEvent: function() {},

    /*
    ============================================================
      Easter Eggs
    ============================================================
    */

    easterEggs: {}

  };

  /*
  ============================================================

  ============================================================
  */

  // bind global vars
  that = app,
     m = that.models,
     s = that.selectors;

  // bind module to window
  window.app = app;

  // document loaded
  $(document).ready(function() {

    // set globals
    app.clickEvent = ((app.models.browser.isMobile) ? 'touchstart' : 'click');
    app.models.globals.debug = !!app._localStorage('debugger');

    // let's get the party started
    app.preInit();

  });

  // window loaded
  $(window).load(function() {

    // attempt to repair any images that didn't load
    app._repairBrokenImages();

  });

})(jQuery);

/*
============================================================
Avoid `console` errors in browsers that lack a console
============================================================
*/

(function() {
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
