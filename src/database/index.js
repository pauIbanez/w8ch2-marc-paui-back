/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const mongoose = require("mongoose");
const chalk = require("chalk");
const debug = require("debug")("tuitah:database");

const connectToDB = (connectionString) =>
  new Promise((resolve, reject) => {
    debug(chalk.whiteBright("Connecting to database..."));
    mongoose.connect(connectionString, (error) => {
      if (error) {
        const newError = {
          ...error,
          message: `Database error: ${error.message}`,
        };
        reject(newError);
        return;
      }

      debug(
        chalk.whiteBright("Connection to database ") +
          chalk.greenBright("SUCCESSFULL")
      );
      resolve();
    });
  });

mongoose.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
  },
});

module.exports = connectToDB;
