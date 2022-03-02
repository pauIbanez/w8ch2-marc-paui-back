require("dotenv").config();
const connectToDB = require("./database");

const connectionString = process.env.MONGO_DB_STRING;

(async () => {
  await connectToDB(connectionString);
})();
