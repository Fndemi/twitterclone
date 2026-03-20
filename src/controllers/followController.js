const prisma = require("../config/prisma");

// Follow a user
const followUser = async (req, res) => {
  const targetUserId = parseInt(req.params.id);
  const currentUserId = req.user.id;

  if (targetUserId === currentUserId) {
    return res.status(400).json({ message: "You cannot follow yourself" });
  }

  try {
    const existing = await prisma.follower.findFirst({
      where: {
        userId: targetUserId,
        followerId: currentUserId,
      },
    });

    if (existing) {
      return res.status(400).json({ message: "Already following" });
    }

    const follow = await prisma.follower.create({
      data: {
        userId: targetUserId,
        followerId: currentUserId,
      },
    });

    res.json({ message: "Followed successfully", follow });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Unfollow
const unfollowUser = async (req, res) => {
  const targetUserId = parseInt(req.params.id);
  const currentUserId = req.user.id;

  try {
    await prisma.follower.deleteMany({
      where: {
        userId: targetUserId,
        followerId: currentUserId,
      },
    });

    res.json({ message: "Unfollowed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { followUser, unfollowUser };