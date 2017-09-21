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
          controller: "topicsController"
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
    function($rootScope, localStorageService, $location) {
      $rootScope.userProfile = null;
      (function(key) {
        if (localStorageService.keys().length === 0) {
          $rootScope.userProfile = null;
        } else {
          $rootScope.userProfile = localStorageService.keys();
        }
      })();
      console.log($rootScope.userProfile);
      $rootScope.$on("$routeChangeStart", function(event, next, current) {
        if ($rootScope.userProfile === null) {
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
