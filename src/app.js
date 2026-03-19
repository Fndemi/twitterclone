const express = require("express");
//express allows us to create routes,handle HTTP requests and manage middleware
const cors = require("cors");
//it allows our backend to accept requests from different domains
const postRoutes = require("./routes/posts");
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
module.exports = app;