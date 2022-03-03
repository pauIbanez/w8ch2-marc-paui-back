const Tuitero = require("../../database/models/Tuitero");
const { getTuiteros } = require("./tuiteroController");

describe("Given getTuiteros controller", () => {
  describe("When it's passes a res and it finds tuiteros", () => {
    test("Then it should call res.json with the found tuiteros", async () => {
      const tuiteros = [
        {
          name: "tweet one",
          username: "sadsa",
        },
        {
          name: "tweet 2",
          username: "sadsa",
        },
      ];

      const res = {
        json: jest.fn(),
      };

      Tuitero.find = jest.fn().mockResolvedValue(tuiteros);

      await getTuiteros(null, res);

      expect(res.json).toHaveBeenCalledWith({ tuiteros });
    });
  });
  describe("When it receives a res and it does not find tuiteros", () => {
    test("Then it should call next with an error with message 'No tuiteros found' and code 404", async () => {
      const expectedError = expect.objectContaining({
        message: "No tuiteros found",
        code: 404,
      });

      const next = jest.fn();

      Tuitero.find = jest.fn().mockResolvedValue(null);

      await getTuiteros(null, null, next);

      expect(next).toHaveBeenCalledWith(expectedError);
    });
  });
});
