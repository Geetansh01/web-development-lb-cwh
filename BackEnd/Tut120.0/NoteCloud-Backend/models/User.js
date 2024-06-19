import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now //Don't call the function here ( Date.now() ❌ ), just pass it and it will be used!
    }
});

const User = mongoose.model("User", UserSchema);
module.exports.User = User;