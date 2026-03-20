const prisma = require("../config/prisma");

//Like a post
const likePost = async (req, res) => {
  const userId = req.user.id;
  const postId = parseInt(req.params.id)


  try {
    const like = await prisma.like.create({
      data: {
        userId, postId
      }
    });
    res.json({ message: "Post liked", like })
  }
  catch (err) {
    res.status(400).json({ message: "Already liked or error", error: err.message })
  }
};

//Unlike a post
const unlikePost = async (req, res) => {
  const userId = req.user.id;
  const postId = parseInt(req.params.id);

  try {
    await prisma.like.deletemany({
      where: { userId, postId }
    });
    res.json({ message: "Post unliked" })
  }
  catch (err) {
    res.status(500).json({ message: "Error", error: err.message })
  }
}

module.exports = { likePost, unlikePost }