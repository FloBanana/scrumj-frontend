'use strict';

angular.
  module('overviewComp').
  component('overviewComp', {
    templateUrl: 'overview-comp/overview-comp.template.html',
    controller: ['$scope', 'ArticleService',
        function OverviewController($scope, ArticleService) {
            $scope.articles = [];

            ArticleService.getArticles()
            .success(function(result){
                console.log("success" + JSON.stringify(result));
                $scope.articles = result;
            })
            .error(function(result){
                console.log(result);
            });
        }
    ]
  });
