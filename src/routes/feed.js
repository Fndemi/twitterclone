const express = require("express");
const router = express.Router();
const redisCache = require("../middleware/redisCache");

const authMiddleware = require("../middleware/authMiddleware");
const { getFeed } = require("../controllers/feedController");
router.get("/", authMiddleware, redisCache, getFeed);

module.exports = router;