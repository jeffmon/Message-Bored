angular.module("myApp").controller("currentUserController", [
  "$scope",
  "UsersService",
  "$location",
  function($scope, UsersService, $location) {
    $scope.currentUserData = null;
    var splitId = $location.$$path.split("/");
    var currentUserId = parseInt(splitId[splitId.length - 1]);
    UsersService.getUserData(currentUserId).then(res => {
      $scope.currentUserData = res[0];
    });
  }
]);
