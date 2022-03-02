const express = require("express");
const { getTweets } = require("../controllers/tweetsController");

const router = express.Router();

router.get("/", getTweets);
router.post("/");
router.put("/:id");
router.delete("/:id");

module.exports = router;
