angular
  .module("myApp")
  .controller("threadController", [
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
  ])
  .directive("threadDirective", function() {
    return {
      restrict: "E",
      templateUrl: "thread.html",
      replace: true
    };
  });
