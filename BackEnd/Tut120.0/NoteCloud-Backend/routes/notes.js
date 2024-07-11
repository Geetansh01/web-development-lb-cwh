const express = require("express");
const router = express.Router();
const { getUser } = require("../middlewares/getUser");
const { body, validationResult } = require("express-validator");
const Note = require("../models/Note");

// ROUTE 1 : Get all notes of logged in user using: GET "/api/notes/fetchallnotes". Login Required
router.get("/fetchallnotes", getUser, async (req, res) => {
  let notes = await Note.find({ id: req.user.id });

  return res.json({ "Your notes": notes });
});

// ROUTE 2 : Add a new note of logged in user using: POST "/api/notes/addnote". Login Required
router.post(
  "/addnote",
  getUser,
  [
    body("title", "Err msg : Pls enter valid email").isLength({ min: 1 }),
    body("description", "Err msg : Password Should not be Empty").isLength({
      min: 3,
    }),
  ],
  async (req, res) => {
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        //If request fails validation (by express validator), return Bad request and errors
        return res.status(400).send({ errors: result.array() });
      }

      //Make a new note and save it to DB
      const {description, title} = req.body;
      const newNote = new Note({
        user: req.user.userID,
        description,
        title
      })

      await newNote.save();
      res.json(newNote);

    } catch (error) {
      //Some entirely different internal error occurred
      return res
        .status(500)
        .send("Some Error Occurred! It's Internal Server Error");
    }
  }
);

module.exports = router;
