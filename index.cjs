const express = require("express");
const app = express();
const cors = require("cors");
const blog = require("./src/utils/BlogsData.json");

const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("blog server is running");
});

app.get("/blog", (req, res) => {
  res.send(blog);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
