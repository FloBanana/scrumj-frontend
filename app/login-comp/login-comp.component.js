'use strict';

angular.
  module('loginComp').
  component('loginComp', {
    templateUrl: 'login-comp/login-comp.template.html',
    controller: ['$scope',
        'UserService', function($scope, UserService){
            $scope.user = {};

            $scope.login = function(){
                var user = {};
                user.username = "test";
                user.password = "test";

                UserService.login(user.username, user.password)
                .success(function(result){
                    console.log("success" + result);
                })
                .error(function(result){
                    console.log(result);
                });
            }

        }
    ]
  });
