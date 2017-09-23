angular.module("myApp").service("LoginService", [
  "$http",
  "$httpParamSerializer",
  function($http, $httpParamSerializer) {
    return {
      loginUser: function(user) {
        return $http.get(`/api/find/${user}`).then(function(res) {
          return res.data;
        });
      },
      registerUser: function(user) {
        return $http({
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          url: "/api/users",
          method: "POST",
          transformRequest: $httpParamSerializer,
          transformResponse: function(x) {
            return angular.fromJson(angular.fromJson(x));
          },
          data: {
            name: user
          }
        }).then(function(res) {
          return res.data;
        });
      }
    };
  }
]);
