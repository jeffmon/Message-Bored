const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;
const path = require("path");
const bp = require("body-parser");
const db = require("./models");
const User = db.User;
const Topic = db.Topic;
const Message = db.Message;

app.use(express.static("public"));
app.use(bp.urlencoded());

app
  .route("/api/users")
  .post((req, res) => {
    User.findOrCreate({
      where: {
        name: req.body.name
      }
    })
      .then(() => {
        User.findAll().then(users => {
          res.json({ users: users, name: req.body.name });
        });
      })
      .catch(err => {
        console.log(err);
      });
  })
  .get((req, res) => {
    User.findAll({
      include: [
        {
          model: Topic,
          as: "Topics"
        }
      ]
    }).then(users => {
      res.json(users);
    });
  });

app
  .route("/api/topics")
  .post((req, res) => {
    Topic.findOrCreate({
      where: {
        name: req.body.name,
        created_by: parseInt(req.body.user) //ID of the current user
      }
    }).then(() => {
      Topic.findAll().then(topics => {
        res.json({ topics: topics, name: req.body.name });
      });
    });
  })
  .get((req, res) => {
    Topic.findAll({
      include: [
        {
          model: User,
          as: "Creator"
        }
      ]
    }).then(topics => {
      res.json(topics);
    });
  });

app.post("/api/messages", (req, res) => {
  Message.findOrCreate({
    where: {
      body: req.body.body,
      author_id: parseInt(req.body.user), //current user, use ID
      topic_id: parseInt(req.body.topic) //current topic use ID also
    }
  }).then(() => {
    Message.findAll().then(messages => {
      res.json({ messages: messages, message: req.body.body });
    });
  });
});

app.get("/api/messages/latest", (req, res) => {
  Message.findAll({
    limit: 10,
    order: [["createdAt", "DESC"]],
    include: [
      {
        model: User,
        as: "Author"
      },
      {
        model: Topic,
        as: "topicName"
      }
    ]
  }).then(messages => {
    res.json(messages);
  });
});

app.get("*", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "/public") });
});

app.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`Listening on port ${PORT}!`);
});
