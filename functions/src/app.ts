/* eslint-disable linebreak-style */
import express = require("express");
import bodyParser = require("body-parser");
import routes from "./routes/index";
import {connectDb} from "./db";
import cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.use(routes);

connectDb().then(async () => {
  app.listen(3001, () => console.log("Listening on http://localhost:3001"));
});
