angular.module("myApp").controller("usersController", [
  "$scope",
  "UsersService",
  function($scope, UsersService) {
    $scope.users = UsersService.users;
  }
]);
