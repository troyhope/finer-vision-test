const express = require("express");
const sequelize = require("./database");
const User = require("./User");
sequelize.sync().then(() => console.log("db is ready"));

const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());

app.post("/users", async (req, res) => {
  await User.create(req.body);
  res.send("user detail is inserted");
});

app.listen(3001, () => {
  console.log("app is running");
});
