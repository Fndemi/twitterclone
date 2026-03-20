const prisma = require("../config/prisma");
//Create a new post

const createPost = async (req, res) => {
  const { content } = req.body
  if (!content) return res.status(400).json({ message: "Content is required" });

  try {
    const post = await prisma.post.create({
      data: {
        content,
        author: { connect: { id: req.user.id } },
      },
    });
    res.status(201).json({ message: "Post created", post });
  }
  catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      where: { authorId: req.user.id },
      orderBy: { createdAt: "desc" },
    });
    res.json({ posts });

  }
  catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


module.exports = { createPost, getPosts }