const Tweet = require("../../database/models/Tweet");
const { deleteTweet } = require("./tweetsController");

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

      Tweet.findByIdAndDelete = jest.fn().mockResolvedValue(null);

      const next = jest.fn();
      await deleteTweet(req, null, next);

      expect(next).toHaveBeenCalled();
    });
  });
});
