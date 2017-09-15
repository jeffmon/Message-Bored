angular.module("myApp").controller("topicsController", [
  "$scope",
  "TopicsService",
  function($scope, TopicsService) {
    $scope.topics = TopicsService.topics;
  }
]);
