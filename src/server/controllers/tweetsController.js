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


module.exports = { deleteTweet, getTweets };

