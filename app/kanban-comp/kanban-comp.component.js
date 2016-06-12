'use strict';

angular.
  module('kanbanComp').
  component('kanbanComp', {
    templateUrl: 'kanban-comp/kanban-comp.template.html',
    controller: ['$scope', 'ArticleService',
        function KanbanController($scope, ArticleService) {
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
