'use strict';

angular.
  module('loginComp').
  component('loginComp', {
    templateUrl: 'login-comp/login-comp.template.html',
    controller: ['$scope', 'Service', function LoginController(Service, $scope){
            $scope.user = {};

            $scope.login = function(){
                console.log($scope.user);
                Service.login(user.username, user.password);
            }

        }
    ]
  });
