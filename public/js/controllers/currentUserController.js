angular.module("myApp").controller("currentUserController", [
  "$scope",
  "usersService",
  "$location",
  function($scope, usersService, $location) {
    $scope.currentUserData = null;
    var splitId = $location.$$path.split("/");
    var currentUserId = parseInt(splitId[splitId.length - 1]);
    console.log(currentUserId);
    usersService.getUserData(currentUserId).then(res => {
      console.log(res[0]);
      var date = new Date(res[0].createdAt);
      var convertedUser = {
        Messages: res[0].Messages.map(function(obj) {
          var messageDate = new Date(obj.createdAt);
          var newObj = {
            body: obj.body,
            createdAt: messageDate.toString(),
            topicName: obj.topicName
          };
          return newObj;
        }),
        id: res[0].id,
        name: res[0].name,
        createdAt: date.toString()
      };

      $scope.currentUserData = convertedUser;
    });
  }
]);
