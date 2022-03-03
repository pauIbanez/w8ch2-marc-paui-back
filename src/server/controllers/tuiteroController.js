const Tuitero = require("../../database/models/Tuitero");

const getTuiteros = async (req, res, next) => {
  const tuiteros = await Tuitero.find();
  if (!tuiteros) {
    const error = new Error("No tuiteros found");
    error.code = 404;
    next(error);
    return;
  }

  res.json({ tuiteros });
};

const createTuitero = async (req, res, next) => {
  const tuitero = req.body;
  try {
    await Tuitero.create(tuitero);
    res.json(tuitero).status(201);
  } catch (error) {
    next(error);
  }
};

module.exports = { getTuiteros, createTuitero };
