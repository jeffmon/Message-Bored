angular.module("myApp").controller("usersController", [
  "$scope",
  "usersService",
  function($scope, usersService) {
    $scope.users = [];

    usersService.getUsers().then(users => {
      $scope.users = users;
      console.log($scope.users);
    });
  }
]);
