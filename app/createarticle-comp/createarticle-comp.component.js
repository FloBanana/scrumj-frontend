'use strict';

angular.
  module('createarticleComp').
  component('createarticleComp', {
    templateUrl: 'createarticle-comp/createarticle-comp.template.html',
    controller: ['$scope', 'ArticleService', '$location',
        function CreateArticleController($scope, ArticleService, $location) {
            $scope.createArticle = function(article) {
                ArticleService.createArticle(article.title, article.notes, article.deadline)
                .success(function(result){
                    console.log("success" + JSON.stringify(result));
                    $location.path('#!/overview');
                })
                .error(function(result){
                    console.log(result);
                });
            }
        }
    ]
  });
