import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 2,
      max: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
      min: 6,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 1024,
    },
    team: {
      type: Object,
      required: true,
    },
    follows: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    favFixtures: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
