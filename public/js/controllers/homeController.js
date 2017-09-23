angular.module("myApp").controller("homeController", [
  "$scope",
  "$rootScope",
  "$location",
  function($scope, $rootScope, $location) {
    if ($rootScope.currentUser === null) {
      $location.url("/login");
    }
  }
]);
