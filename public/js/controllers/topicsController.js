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
    $scope.currentAuthor = null;
    $scope.currentMessage = null;

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
      if ($scope.currentTopic) {
        $scope.currentAuthor = $scope.currentTopic.Creator.name;
      }
    });
    var splitId = $location.$$path.split("/");
    var currentTopicId = parseInt(splitId[splitId.length - 1]);

    $scope.loadMessages = function() {
      TopicsService.getMessages(currentTopicId).then(messages => {
        var convertedMessages = messages.map(function(obj) {
          var date = new Date(obj.createdAt);
          var newObj = {
            Author: obj.Author,
            body: obj.body,
            createdAt: date.toString()
          };

          return newObj;
        });

        $scope.currentMessages = convertedMessages;
        console.log($scope.currentMessages);
      });
    };

    $scope.postNewMessage = function() {
      TopicsService.postMessage(
        $scope.currentMessage,
        $scope.currentUserId,
        currentTopicId
      ).then(() => {
        $scope.loadMessages();
        $scope.currentMessage = null;
      });
    };
  }
]);
