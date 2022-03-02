const Tweet = require("../../database/models/Tweet");

const getTweets = async (req, res, next) => {
  const tweets = await Tweet.find();
  if (!tweets) {
    const error = new Error("No tweets found");
    error.code = 404;
    next(error);
    return;
  }

  res.json({ tweets });
};

const deleteTweet = async (req, res, next) => {
  const { id } = req.params;
  const response = await Tweet.findByIdAndDelete(id);
  if (!response) {
    const error = new Error("Tweet not found");
    error.code = 404;
    next(error);
    return;
  }
  res.json({});
};

const createTweet = async (req, res, next) => {
  const tweet = req.body;
  try {
    await Tweet.create(tweet);
    res.json(tweet).status(201);
  } catch (error) {
    next(error);
  }
};

module.exports = { deleteTweet, getTweets, createTweet };
