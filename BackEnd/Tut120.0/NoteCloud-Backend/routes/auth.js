const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getUser } = require("../middlewares/getUser")
require('dotenv').config()

const JWT_SECRET_PHRASE = process.env.JWT_SECRET_PHRASE; //Get the "JWT_SECRET_PHRASE". Stored in "BackEnd\Tut120.0\NoteCloud-Backend\.env"

// Home page route: GET
router.get("/createuser", (req, res) => {
  res.json({
    Desc: "Hit POST request here to register a user!",
  });
});

// ROUTE 1 : Create user using: POST request on "/api/auth/createuser". No login required
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

        //Generate Hash for password
        const password = req.body.password;
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);

        const newUser = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: hash, //Store hash of password in the DB
        });

        //Send jwt authentication token to user

        // Data to be sent in the JWT auth token to the user.
        // We will use this data to identify the user when they try to use the token to authenticate themselves in the future.
        // Sending user ID because the ID is indexed in our MongoDB.
        // Indexing means that MongoDB creates a data structure that improves the speed of data retrieval operations.
        // Querying based on an indexed field, like the user ID, is the fastest because it allows MongoDB to quickly locate the data without scanning the entire collection.
        const data2send = {
          user: {
            userID: newUser.id,
          },
        };
        const authToken = jwt.sign(data2send, JWT_SECRET_PHRASE);

        return res.json({
          Desc: "User saved to DB",
          authToken: authToken,
        });
      } else {
        //If request fails validation (by express validator), return errors
        return res.status(400).send({ errors: result.array() });
      }
    } catch (error) {
      //Some entirely different internal error occurred
      return res
        .status(500)
        .send("Some Error Occurred! It's Internal Server Error");
    }
  }
);

// ROUTE 2 : Login user using: POST "/api/auth/login". No login required
router.post(
  "/login",
  [
    body("email", "Err msg : Pls enter valid email").isEmail(), //verify valid email format
    body("password", "Err msg : Password can not be Empty").exists(),
  ],
  async (req, res) => {
    try {
      const result = validationResult(req);
      if (result.isEmpty()) {
        //If request passes express validator's validation

        const userFound = await User.findOne({ email: req.body.email });
        if (!userFound) {
          //If no user with e-mail supplied in POST request exists.
          return res
            .status(400)
            .json({ Desc: "No User with this email exists!" }); //Ideally, we won't givev out any info & rather give a generic msg like "Incorrect Credentials"
        }

        //Check if password is correct
        const passwordCompare = bcrypt.compareSync(
          req.body.password,
          userFound.password
        );

        if (!passwordCompare) {
          return res.status(400).json({ Desc: "Incorrect Credentials" });
        }

        //User Verified, send jwt authentication token to user

        // Data to be sent in the JWT auth token to the user.
        // We will use this data to identify the user when they try to use the token to authenticate themselves in the future.
        const data2send = {
          user: {
            userID: userFound.id,
          },
        };
        const authToken = jwt.sign(data2send, JWT_SECRET_PHRASE);
        return res.json({
          Desc: "Welcome Back",
          authToken: authToken,
        });
      } else {
        //If request fails validation (by express validator), return errors
        return res.status(400).send({ errors: result.array() });
      }
    } catch (error) {
      //Some entirely different internal error occurred
      return res
        .status(500)
        .send("Some Error Occurred! It's Internal Server Error");
    }
  }
);

// ROUTE 3 : Get logged in user details using: POST "/api/auth/getuser". Login required
router.post("/getuser", getUser, async (req, res) => { 
  try {
    let id = req.user.userID; //////
    let user = await User.findById(id).select("-password"); //Select all fields except the  password field
    res.json(user);
  } catch (error) {
    //Some entirely different internal error occurred
    console.log(error);
    return res
      .status(500)
      .send("Some Error Occurred! It's Internal Server Error");
  }
});

module.exports = router;
