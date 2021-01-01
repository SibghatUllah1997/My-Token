const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const routes = require("./routes/routes");
const cors = require("cors");
require("dotenv").config();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());

app.use("/", routes);

const PORT = process.env.port;

app.listen(PORT, () => {
  console.log(`express is connected with ${PORT}`);
});
