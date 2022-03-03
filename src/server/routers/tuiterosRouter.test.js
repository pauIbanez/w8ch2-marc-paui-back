const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const connectToMongoDB = require("../../database");
const app = require("../index");
const Tuitero = require("../../database/models/Tuitero");

let database;
beforeAll(async () => {
  database = await MongoMemoryServer.create();
  const uri = database.getUri();
  await connectToMongoDB(uri);
  Tuitero.deleteMany({});
});
afterAll(async () => {
  await mongoose.connection.close();
  await database.stop();
});

beforeEach(async () => {
  Tuitero.create({
    name: "hola",
    username: "hola1",
    _id: "507f1f77bcf86cd799439000",
  });
  Tuitero.create({
    name: "adeu",
    username: "adeu1",
    _id: "507f1f77bcf86cd799439001",
  });
});

afterEach(async () => {
  await Tuitero.deleteMany({});
});

describe("Given a tweetsRouter", () => {
  describe("When it receives a get request at /tuiteros endpoint", () => {
    test("Then it should respond with status 200 and an object with the tuiteros", async () => {
      const { body } = await request(app).get("/tuiteros").expect(200);

      expect(body.tuiteros).toHaveLength(2);
    });
  });
});
