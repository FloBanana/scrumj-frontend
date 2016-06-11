'use strict';

angular.
  module('core.article').
  factory('Article', ['$resource',
  ]).
  factory('Article', function() {
     var factory = {};

     factory.multiply = function(a, b) {
        return a * b
     }

     return factory;
  });
