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
        when('/kanban/:articleId', {
          template: '<kanban-comp></kanban-comp>'
        }).
        when('/createarticle', {
          template: '<createarticle-comp></createarticle-comp>'
        }).
        when('/storyelements/:articleId/:packageId', {
          template: '<storyelements-comp></storyelements-comp>'
        }).
        otherwise('/overview');
    }
]);
