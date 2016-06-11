'use strict';

angular.
  module('storyelementsComp').
  component('storyelementsComp', {
    templateUrl: 'storyelements-comp/storyelements-comp.template.html',
    controller: ['$scope',
        function StoryelementsController($scope) {
            $scope.articles = [];

            var data = JSON.stringify({
              "username": "test",
              "password": "test"
            });

            var xhr = new XMLHttpRequest();

            xhr.addEventListener("readystatechange", function () {
              if (this.readyState === 4) {
                $scope.articles = this.responseText;
                console.log($scope.articles);
              }
            });

            xhr.open("GET", "http://storyboard.floatec.de/article/");
            xhr.setRequestHeader("content-type", "application/json");
            xhr.setRequestHeader("cache-control", "no-cache");

            xhr.send(data);
        }
    ]
  });
