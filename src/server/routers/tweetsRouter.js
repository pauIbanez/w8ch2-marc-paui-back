const express = require("express");

const { deleteTweet, createTweet } = require("../controllers/tweetsController");

const { getTweets } = require("../controllers/tweetsController");

const router = express.Router();

router.get("/", getTweets);
router.post("/", createTweet);
router.put("/:id");
router.delete("/:id", deleteTweet);

module.exports = router;
