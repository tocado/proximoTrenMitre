/*global angular*/
var app = angular.module('Inicial', ['ui.bootstrap']);

app.controller('mainController', function ($scope) {
    "use strict";
    var yo = this;
    
    this.onSuccess = function (position) {
        $scope.mensaje = 'Latitude: '+position.coords.latitude +'Longitude: ' + position.coords.longitude;
        alert('Latitude: '  + position.coords.latitude + 'Longitude: ' + position.coords.longitude);
    }

    // onError Callback receives a PositionError object
    //
    this.onError = function (error) {
        $scope.mensaje = 'code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n';
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    // Options: throw an error if no update is received every 30 seconds.

    navigator.geolocation.watchPosition(this.onSuccess, this.onError, { timeout: 30000 });
    $scope.mensaje = "sin gps";
});