angular.module("myApp", ["ngRoute"]);

angular
  .module("myApp")
  .config([
    "$routeProvider",
    "$locationProvider",
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when("/", {
          templateUrl: "home.html",
          controller: "homeController"
        })
        .when("/login", {
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
        .otherwise({
          template: `<h1>404</h1>`
        });

      $locationProvider.html5Mode(true);
    }
  ])
  .run(["$rootScope", function($rootScope) {}]);
