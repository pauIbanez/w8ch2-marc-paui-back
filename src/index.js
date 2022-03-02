require("dotenv").config();
const connectToDB = require("./database");
const app = require("./server");
const startServer = require("./server/startServer");

const port = process.env.PORT || 400;
const connectionString = process.env.MONGO_DB_STRING;

(async () => {
  await connectToDB(connectionString);
  await startServer(port, app);
})();
