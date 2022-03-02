const Tweet = require("../../database/models/Tweet");

const getTweets = async (req, res, next) => {
  try {
    const tweets = Tweet.find();
    res.json({ tweets });
  } catch (error) {
    error.code = 404;
    error.message = "No tweets found";
    next(error);
  }
};

module.exports = { getTweets };
