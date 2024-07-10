const express = require("express");
const router = express.Router();
const {User} = require("../models/User")

// define the home page route
router.get("/", (req, res) => {
  res.json({
    Desc: "Hit POST request here to register a user!"
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  const newUser = new User(req.body);
  newUser.save();
  res.send("Received!")
})

module.exports = router;
