const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { default: helmet } = require("helmet");

const tweetsRouter = require("./routers/tweetsRouter");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());

app.use("/tweet", tweetsRouter);

module.exports = app;
