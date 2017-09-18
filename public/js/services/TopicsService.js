angular.module("myApp").service("TopicsService", [
  "$http",
  function($http) {
    return {
      getTopics: function() {
        return $http.get("/api/topics").then(function(res) {
          return res.data;
        });
      },
      getMessages: function(id) {
        return $http.get(`/api/messages/by-topic/${id}`).then(function(res) {
          return res.data;
        });
      }
    };
  }
]);
