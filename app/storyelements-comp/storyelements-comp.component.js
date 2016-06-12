'use strict';

angular.
  module('storyelementsComp').
  component('storyelementsComp', {
    templateUrl: 'storyelements-comp/storyelements-comp.template.html',
    controller: ['$scope', 'ArticleService', '$routeParams', '$location',
        function StoryelementsController($scope, ArticleService, $routeParams, $location) {
            var tasks = [];
            var storypointname = "";
            $scope.tasks = tasks;
            $scope.storypointname = storypointname;
            $scope.createStoryPoints = function(storypointname){
                console.log(storypointname);
                ArticleService.createTask(storypointname, $routeParams.packageId)
                .success(function(result){
                    console.log("success" + JSON.stringify(result));
                    tasks.push({"name": storypointname});
                    $scope.storypointname = "";
                })
                .error(function(result){
                    console.log(result);
                });
            }

            $scope.nextStep = function(){
                $location.path('/kanban/'+ $routeParams.articleId);
            }
        }
    ]
  });
