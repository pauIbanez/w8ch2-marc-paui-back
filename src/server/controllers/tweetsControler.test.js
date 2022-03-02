const Tweet = require("../../database/models/Tweet");
const { getTweets } = require("./tweetsController");

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
});
