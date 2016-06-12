'use strict';

angular.
  module('kanbanComp').
  component('kanbanComp', {
    templateUrl: 'kanban-comp/kanban-comp.template.html',
    controller: ['$scope', 'ArticleService', '$routeParams',
        function KanbanController($scope, ArticleService, $routeParams) {
            $scope.lanes = [];
            $scope.overallTasks = 0;
            $scope.doneTasks = 0;

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

            $scope.progress = function progress(key, lane) {
                $scope.lanes[lane+1].push($scope.lanes[lane][key]);
                $scope.lanes[lane].splice(key, 1);

                ArticleService.progressTask($scope.lanes[lane][key].id, lane)
                .success(function(result){
                    console.log("success" + JSON.stringify(result));
                })
                .error(function(result){
                    console.log(result);
                });
                //
            }
        }
    ]
  });
