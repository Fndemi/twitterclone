const express = require("express");
//express allows us to create routes,handle HTTP requests and manage middleware
const cors = require("cors");
//it allows our backend to accept requests from different domains
const postRoutes = require("./routes/posts");
const followRoutes = require("./routes/follow");
const feedRoutes = require("./routes/feed");
const likeRoutes = require("./routes/likes");
const commentRoutes = require("./routes/comments");
const app = express();
//Creates an express application instance

//middleware
app.use(cors()); //allows requests from anywhere(by default)
app.use(express.json()); //Parses incoming JSON requests so you an access req.body in your routes

app.get("/", (req, res) => {
  res.send("API is running ...");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/posts", postRoutes);
app.use("/api/follow", followRoutes);
app.use("/api/feed", feedRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/comments", commentRoutes);
module.exports = app;