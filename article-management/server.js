const express = require("express");
const bodyParser = require("body-parser");
const articlesRoutes = require("./routes/articles");

const app = express();

app.use(bodyParser.json());
app.use("/api/articles", articlesRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
