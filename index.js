const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Rebuild final project</h1>");
});

app.listen(PORT, () => {
  console.log("Listening in port", PORT);
});
