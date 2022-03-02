const Tweet = require("../../database/models/Tweet");

const deleteTweet = async (req, res, next) => {
  const { id } = req.params;
  try {
    const tweet = Tweet.findById(id);
    if (!tweet) {
      const error = new Error("Tweet not found");
      error.status = 404;
      return next(error);
    }
    await Tweet.deleteOne({ _id: id });
    return res.status(200).json({});
  } catch (error) {
    error.message = "Error trying to delete the tweet";
    return next(error);
  }
};

module.exports = { deleteTweet };
