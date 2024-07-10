const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const { body, validationResult } = require("express-validator");

// define the home page route
router.get("/", (req, res) => {
  res.json({
    Desc: "Hit POST request here to register a user!",
  });
});

router.post(
  "/",
  [
    body("name", "Err msg : Name Should not be Empty").isLength({ min: 1 }), //"name" should not be empty
    body("email", "Err msg : Pls enter valid email").isEmail(), //verify valid email format
    body("password", "Err msg : Password Should not be Empty").isLength({
      min: 1,
    }),
  ],
  (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      // console.log(req.body);
      const newUser = new User(req.body);
      newUser
        .save()
        .then(() => {
          res.send("User creation request received!");
        })
        .catch((err) => {
          console.log("\n" + "User Not Saved to DB\n");
          console.log(err);
          res.json({
            Desc: "User Not Saved to DB",
            Error: err.errmsg,
          });
        });
    } else {
      res.send({ errors: result.array() });
    }
  }
);

module.exports = router;
