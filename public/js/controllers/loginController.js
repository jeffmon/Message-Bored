angular.module("myApp").controller("loginController", [
  "$scope",
  "LoginService",
  "localStorageService",
  "$window",
  function($scope, LoginService, localStorageService, $window) {
    $scope.user = null;
    $scope.isNotLoggedIn = true;
    $scope.isLoggedIn = false;

    (function(key) {
      $scope.user = localStorageService.keys()[0];
      if ($scope.user) {
        $scope.isNotLoggedIn = false;
        $scope.isLoggedIn = true;
      }
    })();

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

    $scope.logOut = function() {
      $window.location.href = "/";
      return localStorageService.clearAll();
    };
  }
]);
