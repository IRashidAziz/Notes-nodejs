import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, trim: true },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    match: /^[^s@]+@[^s@]+.[^s@]+$/,
  },
  password: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    min: 8,
    max: 30,
  },
  avatar: {
    type: String,
    // default: // Use it Later
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: false,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
