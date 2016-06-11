'use strict';

angular.
  module('overviewComp').
  component('overviewComp', {
    templateUrl: 'overview-comp/overview-comp.template.html',
    controller: [Article, function OverviewController(Article) {
        this.articles = Article.query();
      }
    ]
  });
