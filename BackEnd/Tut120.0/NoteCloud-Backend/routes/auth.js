const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const { body, validationResult } = require("express-validator");

// Home page route: GET
router.get("/createuser", (req, res) => {
  res.json({
    Desc: "Hit POST request here to register a user!",
  });
});

// Create user using POST request.
router.post(
  "/createuser",
  [
    body("name", "Err msg : Name Should not be Empty").isLength({ min: 1 }), //"name" should not be empty
    body("email", "Err msg : Pls enter valid email").isEmail(), //verify valid email format
    body("password", "Err msg : Password Should not be Empty").isLength({
      min: 1,
    }),
  ],
  async (req, res) => {
    try {
      const result = validationResult(req);
      if (result.isEmpty()) {
        //If request passes express validator's validation

        const found = await User.findOne({ email: req.body.email });
        if (found) {
          //If user with this email already exists
          res.json({ Desc: "User with this email Already Exists!" });
          return;
        }

        const newUser = await User.create(req.body);
        res.json({
          Desc: "User saved to DB",
          SavedUser: newUser,
        });
      } else {
        //If request fails validation (by express validator), return errors
        res.status(400).send({ errors: result.array() });
      }
    } catch (error) {
      //Some entirely different internal error occurred 
      res.status(500).send("Some Error Occurred! It's Internal Server Error")
    }
  }
);

module.exports = router;
