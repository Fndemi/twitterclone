const express = require("express");

const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { followUser, unfollowUser } = require("../controllers/followController");
router.post("/:id", authMiddleware, followUser);
router.delete("/:id", authMiddleware, unfollowUser);
module.exports = router;