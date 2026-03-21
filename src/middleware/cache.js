const cache = {}    //in memory object,stores cached responses
//problem .Lost when server restarts //Not shared across servers
//solution ;Redis(external fast memory store)
//Middleware
const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl;  //uniques key for each request example /api/feed?page=1   each page gets its own cache
  if (cache[key]) {
    return res.json(cache[key])
  }
  res.sendResponse = res.json;

  res.json = (body) => {
    cache[key] = body;
    res.sendResponse(body)
  }

  next()




}

module.exports = cacheMiddleware


//litation of in memory caches 1.Resets when server restarts 2.Not shared across servers