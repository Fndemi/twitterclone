const redis = require("../config/redis");

const redisCache = async (req, res, next) => {
  const key = req.originalUrl;

  try {
    const cached = await redis.get(key);

    if (cached) {
      return res.json(JSON.parse(cached)); //skip database entirely convert string back to object
    }

    res.sendResponse = res.json;

    res.json = async (body) => {
      await redis.set(key, JSON.stringify(body), "EX", 60); // cache 60s
      res.sendResponse(body);
    };

    next();
  } catch (err) {
    next(); // fail silently
  }
};

module.exports = redisCache;