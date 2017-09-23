angular.module("myApp").controller("registerController", [
  "$scope",
  "LoginService",
  "localStorageService",
  "$location",
  "$rootScope",
  function($scope, LoginService, localStorageService, $location, $rootScope) {
    $scope.user = null;
    $scope.isNotLoggedIn = true;
    $scope.isLoggedIn = false;

    $scope.register = function(user) {
      if ($scope.user.length > 0) {
        LoginService.registerUser($scope.user)
          .then(res => {
            if (res) {
              localStorageService.set(res, "user");
              $rootScope.currentUser = res;
              $location.url("/home");
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
