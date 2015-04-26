/**
 *
 * App Name
 *
 * Dependencies:
 * - jQuery
 * - Modernizr
 *
 */

(function($) {

  /******************************/
  /* App Name                   */
  /******************************/

  var APP_NAME = {

    models: {},
    views: {},
    controllers: {},
    helpers: {},
    selectors: {},
    preInit: function() {},
    init: function() {},

    /********************************/
    /* Let's get this party started */
    /********************************/

    // bind app to window
    window.APP = APP;

    // document load
    $(document).ready(function() {

      //

    });

    // window load
    $(window).load(function() {

      //

    });

  };

})(jQuery);

/**********************************************************/
/* Avoid `console` errors in browsers that lack a console */
/**********************************************************/

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
