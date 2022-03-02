const Tweet = require("../../database/models/Tweet");


const getTweets = async (req, res, next) => {
  try {
    const tweets = await Tweet.find();
    res.json({ tweets });
  } catch (error) {
    error.code = 404;
    error.message = "No tweets found";
  }
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

