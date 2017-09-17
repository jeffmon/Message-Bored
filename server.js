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
    User.findAll().then(users => {
      res.json(users);
    });
  });

app.get("*", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "/public") });
});

app.listen(PORT, () => {
  db.sequelize.sync({ force: true });
  console.log(`Listening on port ${PORT}!`);
});
