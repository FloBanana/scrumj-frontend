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
        when('/kanban', {
          template: '<kanban-comp></kanban-comp>'
        }).
        when('/createarticle', {
          template: '<createarticle-comp></createarticle-comp>'
        }).
        when('/storyelements', {
          template: '<storyelements-comp></storyelements-comp>'
        }).
        otherwise('/overview');
    }
]);


/*
participates: function(eventId){
      return $http.get($rootScope.API_URL + '/participants/participates?accountId=' + $window.localStorage['user_id'] + '&eventId=' + eventId + '&access_token=' + $window.localStorage['access_token']);
    },
    join: function(eventId){
      return $http.post($rootScope.API_URL + "/events/join?access_token=" + $window.localStorage['access_token'], {"accountId": $window.localStorage['user_id'],"eventId": eventId});
    },
    leave: function(eventId){
      return $http.delete($rootScope.API_URL + "/events/" + eventId + "/accounts/rel/" + $window.localStorage['user_id'] + "?access_token=" + $window.localStorage['access_token']);
    },

    */
