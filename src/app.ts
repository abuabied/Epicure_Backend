const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
import routes from "./routes/index";
import { connectDb } from "./db";

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.use(routes);

connectDb().then(async () => {
  app.listen(3001, () => console.log("Listening on http://localhost:3001"));
});
