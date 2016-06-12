'use strict';

angular.
  module('loginComp').
  component('loginComp', {
    templateUrl: 'login-comp/login-comp.template.html',
    controller: ['$scope', 'UserService', '$location',
        function($scope, UserService, $location){
            $scope.login = function(user){
                console.log(user.email + ", " + user.password);
                UserService.login(user.email, user.password)
                .success(function(result){
                    $location.path('/overview');
                })
                .error(function(result){
                    console.log(result);
                });
            }

        }
    ]
  });
