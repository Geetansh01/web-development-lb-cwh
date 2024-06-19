import mongoose from "mongoose";
const { Schema } = mongoose;

const NotesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
      type: String,
      required: true,
    },
    tag: String,
    date: {
        type: Date,
        default: Date.now //Don't call the function here ( Date.now() ❌ ), just pass it and it will be used!
    }
});

const Note = mongoose.model("Note", NotesSchema);
module.exports.Note = Note;