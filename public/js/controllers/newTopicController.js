angular.module("myApp").controller("newTopicController", [
  "$scope",
  "TopicsService",
  "$location",
  "$window",
  function($scope, TopicsService, $location, $window) {
    $scope.currentTopic = null;

    $scope.newTopic = function() {
      TopicsService.postTopic(
        $scope.currentTopic,
        $scope.currentUserId
      ).then(res => {
        $window.location.href = `/topics/${res.id}`;
      });
    };
  }
]);
