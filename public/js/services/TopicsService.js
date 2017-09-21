angular.module("myApp").service("TopicsService", [
  "$http",
  "$httpParamSerializer",
  function($http, $httpParamSerializer) {
    return {
      getTopics: function() {
        return $http.get("/api/topics").then(function(res) {
          return res.data;
        });
      },
      postTopic: function(topic, userId) {
        return $http({
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          url: "/api/topics",
          method: "POST",
          transformRequest: $httpParamSerializer,
          transformResponse: function(x) {
            return angular.fromJson(angular.fromJson(x));
          },
          data: {
            name: topic,
            created_by: userId
          }
        }).then(function(res) {
          return res.data;
        });
      },
      getMessages: function(id) {
        return $http.get(`/api/messages/by-topic/${id}`).then(function(res) {
          return res.data;
        });
      },
      postMessage: function(message, userId, topicId) {
        return $http({
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          url: "/api/messages",
          method: "POST",
          transformRequest: $httpParamSerializer,
          transformResponse: function(x) {
            return angular.fromJson(angular.fromJson(x));
          },
          data: {
            body: message,
            user: userId,
            topic: topicId
          }
        }).then(function(res) {
          return res.data;
        });
      }
    };
  }
]);
