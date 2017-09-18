angular.module("myApp").controller("loginController", [
  "$scope",
  "LoginService",
  "localStorageService",
  "$window",
  function($scope, LoginService, localStorageService, $window) {
    $scope.user = "";

    $scope.login = function() {
      if ($scope.user.length > 0) {
        LoginService.loginUser($scope.user)
          .then(res => {
            if (res) {
              return localStorageService.set(res.name, "user");
            }
          })
          .then(() => {
            $window.location.href = "/home";
          });
      } else {
        console.log(null);
      }
    };
  }
]);
