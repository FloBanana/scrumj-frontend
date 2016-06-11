'use strict';

angular.
  module('helloWorldApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/hello-world', {
          template: '<hello-world></hello-world>'
        }).
        otherwise('/hello-world');
    }
  ]);
