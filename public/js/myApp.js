angular.module("myApp", ["ngRoute", "LocalStorageModule"]);

angular
  .module("myApp")
  .config([
    "$routeProvider",
    "$locationProvider",
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when("/home", {
          templateUrl: "home.html",
          controller: "homeController"
        })
        .when("/", {
          templateUrl: "login.html",
          controller: "loginController"
        })
        .when("/register", {
          templateUrl: "register.html",
          controller: "registerController"
        })
        .when("/users", {
          templateUrl: "users.html",
          controller: "usersController"
        })
        .when("/topics/:id", {
          templateUrl: "thread.html",
          controller: "topicsController"
        })
        .when("/newTopic", {
          templateUrl: "newTopic.html",
          controller: "newTopicController"
        })
        .when("/users/:id", {
          templateUrl: "currentUser.html",
          controller: "currentUserController"
        })
        .when("/latest", {
          templateUrl: "latest.html",
          controller: "latestController"
        })
        .otherwise({
          redirectTo: "/"
        });

      $locationProvider.html5Mode(true);
    }
  ])
  .run([
    "$rootScope",
    "localStorageService",
    "$location",
    "LoginService",
    function($rootScope, localStorageService, $location, LoginService) {
      $rootScope.currentUser = null;
      $rootScope.currentUserId = null;
      (function(key) {
        if (localStorageService.keys().length === 0) {
          $rootScope.currentUser = null;
        } else {
          $rootScope.currentUser = localStorageService.keys()[0];
          LoginService.loginUser($rootScope.currentUser).then(res => {
            $rootScope.currentUserId = res.id;
          });
        }
      })();
      console.log($rootScope.currentUser);
      $rootScope.$on("$routeChangeStart", function(event, next, current) {
        if ($rootScope.currentUser === null) {
          if (
            next.templateUrl === "login.html" ||
            next.templateUrl === "register.html"
          ) {
          } else {
            $location.path("/login");
          }
        }
      });
    }
  ]);
