/*global angular*/
var app = angular.module('Inicial', ['ui.bootstrap']);

app.controller('mainController', function ($scope) {
    "use strict";
    this.mensaje = "sin gps";
    var yo = this;

    // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    function onSuccess(position) {
        yo.mensaje = 'Latitude: '  + position.coords.latitude +
            'Longitude: ' + position.coords.longitude;
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        yo.mensaje = 'code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n';
    }

    // Options: throw an error if no update is received every 30 seconds.
    //
    this.mensaje = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });
});