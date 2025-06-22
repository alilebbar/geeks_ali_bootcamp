const express = require("express");
const server = express();
const cors = require("cors");
const route = require("./routes/route");
require("dotenv").config();

server.use(cors());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
server.use("/api", route);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
