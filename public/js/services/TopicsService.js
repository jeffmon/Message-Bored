angular.module("myApp").service("TopicsService", [
  function() {
    var topics = [
      {
        id: 1,
        title: "First Topic",
        createdyBy: "Jeff",
        messages: [
          {
            message: "This is the first message",
            user: "DevLeague"
          },
          {
            message: "This is the second message posted!",
            user: "Jeff"
          }
        ]
      },
      {
        id: 2,
        title: "Second Topic",
        createdyBy: "DevLeague",
        messages: [
          {
            message: "This is the first message of the second topic",
            user: "Jeff"
          }
        ]
      }
    ];

    return {
      topics: topics
    };
  }
]);
