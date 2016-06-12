'use strict';

angular.
  module('landingpageComp').
  component('landingpageComp', {
    templateUrl: 'storyelements-comp/storyelements-comp.template.html',
    controller: ['$scope', 'ArticleService', '$routeParams', '$location',
        function StoryelementsController($scope, ArticleService, $routeParams, $location) {

        }
    ]
  });
