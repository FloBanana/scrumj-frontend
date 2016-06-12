'use strict';

angular.
  module('overviewComp').
  component('overviewComp', {
    templateUrl: 'overview-comp/overview-comp.template.html',
    controller: ['$scope', 'Service',
        function OverviewController($scope, Service) {
            $scope.articles = [];
        }
    ]
  });
