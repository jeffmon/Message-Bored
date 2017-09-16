angular.module("myApp").controller("topicsController", [
  "$scope",
  "TopicsService",
  "$location",
  function($scope, TopicsService, $location) {
    $scope.topics = TopicsService.topics;

    var splitId = $location.$$path.split("/");
    var currentTopicId = parseInt(splitId[splitId.length - 1]);

    function findTopic(topic) {
      return topic.id === currentTopicId;
    }

    $scope.currentTopic = TopicsService.topics.find(findTopic);
  }
]);
