angular.module("myApp").controller("registerController", [
  "$scope",
  "LoginService",
  "localStorageService",
  "$window",
  function($scope, LoginService, localStorageService, $window) {
    console.log("test");
    $scope.user = null;
    $scope.isNotLoggedIn = true;
    $scope.isLoggedIn = false;

    $scope.register = function(user) {
      if ($scope.user.length > 0) {
        LoginService.registerUser($scope.user)
          .then(res => {
            if (res) {
              return localStorageService.set(res, "user");
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
