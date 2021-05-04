const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 5000;

const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

const cDB = mongoose.createConnection("mongodb://localhost:27017/CommentsDB", {
  useNewUrlParser: true,
});

const uDB = mongoose.createConnection("mongodb://localhost:27017/UsersDB", {
  useNewUrlParser: true,
});
const aDB = mongoose.createConnection("mongodb://localhost:27017/ArticlesDB", {
  useNewUrlParser: true,
});

const commentSchema = {
  id: Number,
  username: String,
  comment: String,
  date: String,
  articleID: String,
};

const articleSchema = {
  title: String,
  subject: String,
  date: String,
  author: String,
  conent: String,
};

const userSchema = {
  id: Number,
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  password: String,
};

const Comment = cDB.model("Comment", commentSchema, "Comments");
const User = uDB.model("User", userSchema, "Users");
const Article = aDB.model("Article", articleSchema, "Articles");

app
  .route("/comments")

  .get(function (req, res) {
    Comment.find(function (err, foundData) {
      if (!err) {
        res.send(foundData);
      } else {
        res.send(err);
      }
    });
  })

  .post(function (req, res) {
    const newComment = new Comment({
      username: req.body.username,
      comment: req.body.comment,
      date: req.body.date,
      articleID: req.body.articleID,
    });
    newComment.save(function (err) {
      if (!err) {
        res.send("Data was added successfully");
      } else {
        res.send(err);
      }
    });
  });

app
  .route("/register")

  .get(function (req, res) {
    User.find(function (err, foundData) {
      if (!err) {
        res.send(foundData);
      } else {
        res.send(err);
      }
    });
  })

  .post(function (req, res) {
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    newUser.save(function (err) {
      if (!err) {
        res.send("Data register was added successfully");
      } else {
        res.send(err);
      }
    });
  });

app
  .route("/login")

  .get(function (req, res) {
    const username = req.query.username;
    User.findOne({ username: username }, function (err, foundUser) {
      if (err) {
        res.send(err);
      } else {
        if (foundUser) {
          res.send({
            firstName: foundUser.firstName,
            lastName: foundUser.lastName,
            username: foundUser.username,
            email: foundUser.email,
            password: foundUser.password,
          });
        }
      }
    });
  })

  .post(function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne(
      {
        username: username,
      },
      function (err, foundUser) {
        if (err) {
          console.log(err);
        } else {
          if (foundUser) {
            if (foundUser.password === password) {
              console.log("you are signed in");
              res.send("Accepted");
            } else {
              console.log("did not work");
              res.send("Wrong Password");
            }
          } else {
            res.send("No user founds with that username");
          }
        }
      }
    );
  });

app
  .route("/articles")

  .get(function (req, res) {
    Article.find(function (err, foundData) {
      if (!err) {
        res.send(foundData);
        console.log("yay articles");
      } else {
        console.log("no ");
        res.send(err);
      }
    });
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
