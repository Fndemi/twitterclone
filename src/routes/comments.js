const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const { createComment } = require("../controllers/commentController")

router.post("/:id", authMiddleware, createComment);

module.exports = router;