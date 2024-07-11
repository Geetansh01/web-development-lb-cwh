const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new Schema({
  user: {
    //To link kis user ke notes hain?
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", //"ref" tells mongoose which model to use for population, here, "User" model. Docs : "https://mongoosejs.com/docs/populate.html"
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: "General",
  },
  date: {
    type: Date,
    default: Date.now, //Don't call the function here ( Date.now() ❌ ), just pass it and it will be used!
  },
});

const Note = mongoose.model("Note", NotesSchema);
module.exports = Note;
