import functions = require("firebase-functions");
import express = require("express");
import bodyParser = require("body-parser");
import routes from "./routes/index";
import {connectDb} from "./db";
import cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(routes);

connectDb();

exports.api = functions.https.onRequest(app);
