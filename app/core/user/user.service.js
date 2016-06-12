'use strict';

angular.
  module('core.user').
  factory('UserService', function ($rootScope, $window, $http, $q) {
       return {
           login: function login(username, password) {
               var postData = {
                "username": username,
                "password": password
              };
              return $http.post('http://storyboard.floatec.de/login/', postData);
           }
       };
  });
