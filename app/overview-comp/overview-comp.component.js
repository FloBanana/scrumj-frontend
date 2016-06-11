'use strict';

angular.
  module('overviewComp').
  component('overviewComp', {
    templateUrl: 'overview-comp/overview-comp.template.html',
    controller: ['$scope',
        function OverviewController($scope) {
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
