angular.module("myApp").service("LatestService", [
  "$http",
  function($http) {
    return {
      getLatest: function() {
        return $http.get("/api/messages/latest").then(function(res) {
          return res.data;
        });
      }
    };
  }
]);
