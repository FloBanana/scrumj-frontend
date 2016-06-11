'use strict';

angular.
  module('scrumjApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/login', {
          template: '<login-comp></login-comp>'
        }).
        when('/overview', {
          template: '<overview-comp></overview-comp>'
        }).
        otherwise('/overview');
    }
  ]);
