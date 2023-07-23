const express = require("express");
const app = express();
const mongoose = require("./db/db");
const cors = require("cors")

mongoose();
app.use(express.json());
app.use(cors({
  origin: "*"
}))
app.use(require("./routes/todoList"));

app.get("/", (req, res) => {
  res.send("API is Successfully Running");
});

app.listen(5000, () => {
  console.log("SERVER RUNNING ON PORT 5000");
});
