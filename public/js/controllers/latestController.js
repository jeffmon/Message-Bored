angular.module("myApp").controller("latestController", [
  "$scope",
  "LatestService",
  function($scope, LatestService) {
    $scope.messages = null;
    LatestService.getLatest().then(messages => {
      $scope.messages = messages;
      console.log($scope.messages);
    });
  }
]);
