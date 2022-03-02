const Tweet = require("../../database/models/Tweet");

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

module.exports = { deleteTweet };
