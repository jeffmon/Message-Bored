angular.module("myApp").service("UsersService", [
  function() {
    var users = [
      {
        name: "Jeffrey"
      },
      {
        name: "DevLeague"
      },
      {
        name: "Bob"
      }
    ];

    return {
      users: users
    };
  }
]);
