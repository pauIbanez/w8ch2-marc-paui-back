const express = require("express");
const { deleteTweet } = require("../controllers/tweetsController");

const router = express.Router();

router.get("/");
router.post("/");
router.put("/:id");
router.delete("/:id", deleteTweet);

module.exports = router;
