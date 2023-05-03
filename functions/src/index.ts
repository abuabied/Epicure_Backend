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

app.use(routes);

const startConnection = connectDb().then(async () => {
  exports.app = functions.https.onRequest(app);
});

exports.app = startConnection;
