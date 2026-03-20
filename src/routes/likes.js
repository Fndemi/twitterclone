const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { liekPost, unlikePost } = require("../controllers/likeController");

router.post("/:id", authMiddleware, likePost);
router.delete("/:id", authMiddleware, unlikePost);

module.exports = router