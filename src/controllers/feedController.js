const prisma = require("../config/prisma");

const getFeed = async (req, res) => {
  const userId = req.user.id;

  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const skip = (page - 1) * limit;

  try {
    const following = await prisma.follower.findMany({
      where: { followerId: userId },
      select: { userId: true },
    });

    const ids = following.map(f => f.userId);
    ids.push(userId);

    const posts = await prisma.post.findMany({
      where: { authorId: { in: ids } },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    });

    res.json({
      page,
      posts,
    });
  } catch (err) {
    res.status(500).json({ message: "Error", error: err.message });
  }
};

module.exports = { getFeed };