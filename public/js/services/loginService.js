angular.module("myApp").service("LoginService", [
  "$http",
  function($http) {
    return {
      loginUser: function(user) {
        return $http.get(`/api/find/${user}`).then(function(res) {
          return res.data;
        });
      }
    };
  }
]);
