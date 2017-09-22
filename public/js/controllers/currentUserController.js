angular.module("myApp").controller("currentUserController", [
  "$scope",
  "usersService",
  "$location",
  function($scope, usersService, $location) {
    $scope.currentUserData = null;
    var splitId = $location.$$path.split("/");
    var currentUserId = parseInt(splitId[splitId.length - 1]);
    usersService.getUserData(currentUserId).then(res => {
      $scope.currentUserData = res[0];
    });
  }
]);
