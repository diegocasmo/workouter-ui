/**
 * Author: Diego Castillo
 * Company: Workouter
 * Description: Main entry point and configuration
 *              of the application
 */

/*global require*/

'use strict';

require.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    foundation: '../../bower_components/foundation/js/foundation.min',
    handlebars: '../bower_components/handlebars/handlebars.min',
    localstorage: '../bower_components/backbone.localStorage/backbone.localStorage',
    firebase: '../bower_components/firebase/firebase',
    backbonefire: '../bower_components/backbonefire/dist/backbonefire',
    'jquery.cookie': '../bower_components/jquery.cookie/jquery.cookie',
    routefilter: '../bower_components/routefilter/dist/backbone.routefilter.min'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    jquery: {
      exports: '$'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    foundation: {
      deps: ['jquery']
    },
    localstorage: {
      deps: ['backbone']
    },
    backbonefire: {
      deps: ['firebase', 'backbone']
    },
    'jquery.cookie': {
      deps: ['jquery']
    }
  }
});

require([
  'jquery',
  'backbone',
  'routers/app_router',
  'routefilter',
  'foundation'
], function ($, Backbone, AppRouter) {

  $(document).foundation();

  var appRouter = new AppRouter();

  Backbone.history.start({
    pushState: false,
    root: '/'
  });
});