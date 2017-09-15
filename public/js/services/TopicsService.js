angular.module("myApp").service("TopicsService", [
  function() {
    var topics = [
      {
        title: "First Topic",
        createdyBy: "Jeff",
        messages: [
          {
            body: "This is the first message",
            author: "DevLeague"
          }
        ]
      },
      {
        title: "Second Topic",
        createdyBy: "DevLeague",
        messages: [
          {
            body: "This is the first message of the second topic",
            author: "Jeff"
          }
        ]
      }
    ];

    return {
      topics: topics
    };
  }
]);
