angular.module("myApp").controller("topicsController", [
  "$scope",
  "TopicsService",
  "$location",
  function($scope, TopicsService, $location) {
    $scope.topics = [];
    $scope.currentTopic = [];
    $scope.currentMessages = [];

    TopicsService.getTopics().then(topics => {
      $scope.topics = topics;
      var splitId = $location.$$path.split("/");
      var currentTopicId = parseInt(splitId[splitId.length - 1]);
      function findTopic(topic) {
        return topic.id === currentTopicId;
      }
      $scope.currentTopic = $scope.topics.find(findTopic);
    });
    var splitId = $location.$$path.split("/");
    var currentTopicId = parseInt(splitId[splitId.length - 1]);

    TopicsService.getMessages(currentTopicId).then(messages => {
      $scope.currentMessages = messages;
    });
  }
]);
