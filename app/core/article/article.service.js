'use strict';

angular.
module('core.article').
factory('ArticleService', function($rootScope, $window, $http, $q) {
    return {
        getArticles: function getArticles()  {
            return $http.get('http://storyboard.floatec.de/article/');
        },
        createArticle: function createArticle(title, notes, deadline)  {
            return $http.post('http://storyboard.floatec.de/article/', {
                "title": title,
                "note": notes,
                "deadline": deadline
            });
        },
        createTask: function createTask(name, packageId)  {
            return $http.post('http://storyboard.floatec.de/article/pakage/task/' + packageId, {
                "name": name,
                "userid": "1",
                "deadline": "2016-12-12",
                "description": "qwe",
                "review": "1"
            });
        },

        getTasks: function getTasks(name, packageId)  {
            return $http.get('http://storyboard.floatec.de/article/pakage/task/' + packageId);
        }
    };
});



/*
participates: function(eventId){
      return $http.get($rootScope.API_URL + '/participants/participates?accountId=' + $window.localStorage['user_id'] + '&eventId=' + eventId + '&access_token=' + $window.localStorage['access_token']);
    },
    join: function(eventId){
      return $http.post($rootScope.API_URL + "/events/join?access_token=" + $window.localStorage['access_token'], {"accountId": $window.localStorage['user_id'],"eventId": eventId});
    },
    leave: function(eventId){
      return $http.delete($rootScope.API_URL + "/events/" + eventId + "/accounts/rel/" + $window.localStorage['user_id'] + "?access_token=" + $window.localStorage['access_token']);
    },

    */
