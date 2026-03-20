const prisma = require("../config/prisma");
//Add commment
const createComment = async (req, res) => {
  const userId = req.user.id;
  const postId = parseInt(req.params.id);
  const { content } = req.body;
  if (!content) return res.status(400).json({ message: "Content required" });
  try {
    const comment = await prisma.comment.create({
      data: {
        content, userId, postId
      }
    });
    res.json({ message: "Comment added", comment });
  } catch (err) {
    res.status(500).json({ message: "Error", error: err.message });
  }
}

module.exports = { createComment }