angular.module("myApp").service("UsersService", [
  "$http",
  function($http) {
    return {
      getUsers: function() {
        return $http.get("/api/users").then(function(res) {
          return res.data;
        });
      },
      getUserData: function(userId) {
        return $http.get(`/api/user/${userId}`).then(function(res) {
          return res.data;
        });
      }
    };
  }
]);
