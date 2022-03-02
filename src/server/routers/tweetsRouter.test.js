const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const connectToMongoDB = require("../../database");
const app = require("../index");
const Tweet = require("../../database/models/Tweet");

let database;
beforeAll(async () => {
  database = await MongoMemoryServer.create();
  const uri = database.getUri();
  await connectToMongoDB(uri);
  Tweet.deleteMany({});
});
afterAll(async () => {
  await mongoose.connection.close();
  await database.stop();
});

beforeEach(async () => {
  Tweet.create({
    date: "",
    text: "hola1",
    likes: 1,
    _id: "507f1f77bcf86cd799439000",
  });
  Tweet.create({
    date: "",
    text: "hola2",
    likes: 2,
    _id: "507f1f77bcf86cd799439090",
  });
  Tweet.create({
    date: "",
    text: "hola3",
    likes: 3,
    _id: "507f1f77bcf86cd799439013",
  });
});

afterEach(async () => {
  await Tweet.deleteMany({});
});

describe("Given a tweetsRouter", () => {
  describe("When it receives delete request at the tweet/507f1f77bcf86cd799439013 endpoint", () => {
    test("Then it should respond with status 200 and an empty object", async () => {
      await request(app).delete("/tweet/507f1f77bcf86cd799439013").expect(200);
    });
  });
});

describe("Given a tweetsRouter", () => {
  describe("When it receives delete request at the tweet/507f1f77bcf86cd799439014 endpoint", () => {
    test("Then it should respond with status 404 ", async () => {
      await request(app).delete("/tweet/507f1f77bcf86cd799439014").expect(404);
    });
  });
});
