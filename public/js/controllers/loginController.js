angular.module("myApp").controller("loginController", [
  "$scope",
  "LoginService",
  "localStorageService",
  "$window",
  "$location",
  "$rootScope",
  function(
    $scope,
    LoginService,
    localStorageService,
    $window,
    $location,
    $rootScope
  ) {
    $scope.user = null;

    (function(key) {
      $scope.user = localStorageService.keys()[0];
    })();

    $scope.login = function() {
      if ($scope.user.length > 0) {
        LoginService.loginUser($scope.user).then(res => {
          if (res) {
            localStorageService.set(res.name, "user");
            $rootScope.currentUser = res.name;
            $rootScope.currentUserId = res.id;
            $scope.user = res.name;
            $location.url("/home");
          }
        });
      } else {
        console.log(null);
      }
    };

    $scope.logOut = function() {
      localStorageService.clearAll();
      $rootScope.currentUser = null;
      $rootScope.currentUserId = null;
      $scope.user = null;
      $location.url("/");
    };
  }
]);
