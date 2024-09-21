const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const Problem =require('./models/problem.model')
const errorHandler = require("./utils/errorHandler");
const connect = require("./config/db.config");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use("/api", apiRouter);

// last middleWare if any error comes
app.use(errorHandler)
app.listen(PORT, async () => {
  console.log(`surver running on port ${PORT}`);
  await connect();
  console.log("connect to db");
 
});



