const { model, Schema } = require("mongoose");

const TweetSchema = new Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  text: {
    type: String,
    min: 1,
    max: 200,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

const Tweet = model("Tweet", TweetSchema, "tweets");

module.exports = Tweet;
