const functions = require("firebase-functions");
const express = require("express");
const app = express();
import routes from "./routes/index";
import bodyParser = require("body-parser");
import cors = require("cors");
import { connectDb } from "./db";

exports.app = functions.https.onRequest(app);

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.use(routes);

connectDb().then(async () => {
  app.listen(5001, () => console.log("Listening on http://localhost:5001"));
});