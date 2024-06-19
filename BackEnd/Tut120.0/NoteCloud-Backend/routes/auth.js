const express = require("express");
const router = express.Router();

// define the home page route
router.get("/", (req, res) => {
  res.json({
    name: "I am Magombo"
  });
});

module.exports = router;
