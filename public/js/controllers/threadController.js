angular.module("myApp").controller("threadController", [
  "$scope",
  function($scope) {
    $scope.title = "Thread Title";
    $scope.messages = [
      {
        message: "Hello!",
        user: "DevLeague"
      },
      {
        message: "What's up",
        user: "Jeff"
      }
    ];
  }
]);
