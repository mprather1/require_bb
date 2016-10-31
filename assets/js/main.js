requirejs.config({
  baseUrl: 'assets/js',
  paths: {
    backbone: 'vendor/backbone',
    jquery: 'vendor/jquery',
    json2: 'vendor/json2',
    underscore: 'vendor/underscore',
    backboneradio: 'vendor/backbone.radio',
    marionette: 'vendor/backbone.marionette/backbone.marionette',
    
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["jquery", 'underscore', 'json2'],
      exports: "Backbone"
    },
    marionette: {
      deps: ['backbone', 'backboneradio'],
      exports: 'Marionette'
    }
  }
});

require(['marionette'], function(bbm){
  console.log('JQuery version ', $.fn.jquery);
  console.log("underscore identity call: ", _.identity(5));
  console.log("Marionette: ", bbm)  
})