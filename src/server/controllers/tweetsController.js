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
  try {
    await Tweet.findByIdAndDelete(id);
    res.json({});
  } catch (error) {
    error.message = "Error trying to delete the tweet";

    next(error);
  }
};

module.exports = { deleteTweet, getTweets };
