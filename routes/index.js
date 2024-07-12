var express = require("express");
var router = express.Router();

/* Messages Array */
const messages = [
  {
    text: "target had an unfortunate accident!",
    user: "Agent 47",
    added: new Date().toLocaleString().split(",")[0],
  },
  {
    text: "Congrats 47, your next target's file will be sent next week.",
    user: "Diana",
    added: new Date().toLocaleString().split(",")[0],
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Post a new message" });
});

router.post("/new", function (req, res) {
  const message = req.body.message;
  const name = req.body.name;

  messages.push({
    text: message,
    user: name,
    added: new Date().toLocaleString().split(",")[0],
  });

  res.redirect("/");
});

module.exports = router;
