angular.module("myApp").service("TopicsService", [
  function() {
    var topics = [
      {
        id: 1,
        name: "First Topic",
        createdyBy: "Jeff",
        messages: [
          {
            body: "This is the first message",
            user: "DevLeague"
          },
          {
            body: "This is the second message posted!",
            user: "Jeff"
          }
        ]
      },
      {
        id: 2,
        name: "Second Topic",
        createdyBy: "DevLeague",
        messages: [
          {
            body: "This is the first message of the second topic",
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
