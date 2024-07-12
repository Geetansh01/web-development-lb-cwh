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

// ROUTE 3 : Update an existing note of logged in user using: PUT "/api/notes/updatenote". Login Required
router.put(
  "/updatenote/:noteId",
  getUser,
  async (req, res) => {
    try {
      //Check if note exists
      const note = await Note.findById(req.params.noteId);     
      
      if(!note){
        return res.status(404).send("Not Found"); 
      }

      //Check if note belongs to user
      if(note.user.toString() !== req.user.userID){
        return res.status(401).send("Unauthorized"); 
      }

      //Update the note
      const {title, description, tag} = req.body;
      let updates = {};
      //Extract whatever the user intends to update
      if(title) updates.title = title;
      if(description) updates.description = description;
      if(tag) updates.tag = tag;

      const updatedNote = await Note.findByIdAndUpdate(req.params.noteId, updates, {new: true});

      res.json(updatedNote);
    } catch (error) {
      //Some entirely different internal error occurred
      console.log(error);
      return res
        .status(500)
        .send("Some Error Occurred! It's Internal Server Error");
    }
  }
);

module.exports = router;
