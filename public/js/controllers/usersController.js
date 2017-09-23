angular.module("myApp").controller("usersController", [
  "$scope",
  "UsersService",
  function($scope, UsersService) {
    $scope.users = [];

    UsersService.getUsers().then(users => {
      $scope.users = users;
    });
  }
]);
