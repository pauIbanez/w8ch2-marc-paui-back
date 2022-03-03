const express = require("express");
const { getTuiteros } = require("../controllers/tuiteroController");

const router = express.Router();

router.get("/", getTuiteros);

module.exports = router;
