const Tweet = require("../../database/models/Tweet");
const { getTweets, deleteTweet } = require("./tweetsController");

describe("Given getTweets controller", () => {
  describe("When it's passes a res and it finds tweets", () => {
    test("Then it should call res.json with the found tweets", async () => {
      const tweets = [
        {
          text: "tweet one",
          date: "sadsa",
        },
        {
          text: "tweet 2",
          date: "sadsa",
        },
      ];

      const res = {
        json: jest.fn(),
      };

      Tweet.find = jest.fn().mockResolvedValue(tweets);

      await getTweets(null, res);

      expect(res.json).toHaveBeenCalledWith({ tweets });
    });
  });

  describe("When it's passes a res and it does not find tweets", () => {
    test("Then it should call next with an error with message 'No tweets found' and code 404", async () => {
      const expectedError = expect.objectContaining({
        message: "No tweets found",
        code: 404,
      });

      const next = jest.fn();

      Tweet.find = jest.fn().mockResolvedValue(null);

      await getTweets(null, null, next);

      expect(next).toHaveBeenCalledWith(expectedError);
    });
  });
});

describe("Given a deleteTweet controller", () => {
  describe("When it receives a request with a valid id", () => {
    test("Then it should return an empty object", async () => {
      const tweet = { date: "", text: "hello", likes: 2, id: 3 };
      const req = { params: { id: tweet.id } };

      Tweet.findByIdAndDelete = jest.fn().mockResolvedValue({});

      const res = { json: jest.fn() };

      await deleteTweet(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
  describe("When it receives a request without a valid id", () => {
    test("Then it should return an error", async () => {
      const tweet = { date: "", text: "hello", likes: 2, id: 3 };
      const req = { params: { id: tweet.id } };

      Tweet.findByIdAndDelete = jest.fn().mockRejectedValue({});

      const next = jest.fn();
      await deleteTweet(req, null, next);

      expect(next).toHaveBeenCalled();
    });
  });
});
