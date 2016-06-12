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
  ])
  .factory('Service', function() {
      var fac = {};
      fac.test = function login(username, password){
          var data = JSON.stringify({
            "username": username,
            "password": password
          });

          var xhr = new XMLHttpRequest();
          xhr.withCredentials = true;

          xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
              return this.responseText;
            }
          });

          xhr.open("POST", "http://storyboard.floatec.de/login/");
          xhr.setRequestHeader("content-type", "application/json");
          xhr.setRequestHeader("cache-control", "no-cache");
          xhr.setRequestHeader("postman-token", "ed19d8f9-010c-b41d-198a-deb683f23b2d");

          xhr.send(data);
      };

      fac.getArticles = function() {
        var data = JSON.stringify(false);

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
        });

        xhr.open("GET", "http://storyboard.floatec.de/article/");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("postman-token", "6271b323-6f04-27c8-6b2f-bb27b35c394c");

        xhr.send(data);
      }

      return fac;
    });
