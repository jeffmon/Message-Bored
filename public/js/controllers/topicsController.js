angular.module("myApp").controller("topicsController", [
  "$scope",
  "TopicsService",
  "$location",
  "localStorageService",
  function($scope, TopicsService, $location, localStorageService) {
    $scope.topics = [];
    $scope.currentTopic = [];
    $scope.currentMessages = [];
    $scope.isLoggedIn = false;

    (function() {
      if (localStorageService.keys().length > 0) {
        $scope.isLoggedIn = true;
      }
    })();

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

    $scope.loadMessages = function() {
      TopicsService.getMessages(currentTopicId).then(messages => {
        $scope.currentMessages = messages;
      });
    };
  }
]);
