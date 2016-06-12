'use strict';

angular.
  module('kanbanComp').
  component('kanbanComp', {
    templateUrl: 'kanban-comp/kanban-comp.template.html',
    controller: ['$scope', 'ArticleService', '$routeParams',
        function KanbanController($scope, ArticleService, $routeParams) {
            $scope.lanes = [];

            ArticleService.getArticle($routeParams.articleId)
            .success(function(result){
                console.log("success" + JSON.stringify(result));
                $scope.lanes[0] = result.lanes.todo;
                $scope.lanes[1] = result.lanes.inprogress;
                $scope.lanes[2] = result.lanes.review;
                $scope.lanes[3] = result.lanes.done;
            })
            .error(function(result){
                console.log(result);
            });
        }
    ]
  });
