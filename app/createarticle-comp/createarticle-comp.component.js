'use strict';

angular.
  module('createarticleComp').
  component('createarticleComp', {
    templateUrl: 'createarticle-comp/createarticle-comp.template.html',
    controller: ['$scope', 'ArticleService',
        function CreateArticleController($scope, ArticleService) {
            $scope.createArticle = function(article) {
                console.log(JSON.stringify(article));
                ArticleService.createArticle()
                .success(function(result){
                    console.log("success" + JSON.stringify(result));
                    $scope.articles = result;
                })
                .error(function(result){
                    console.log(result);
                });
            }
        }
    ]
  });
