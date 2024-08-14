const cors = require("cors");
const port = process.env.PORT || 3388;
const express = require("express");

//const basicAuth = require('express-basic-auth')
const app = express();
const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended: false, limit: '5mb'}))
app.use(bodyParser.json({ limit: "5mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static(__dirname));
const router = require("./router");

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);
app.use(router);

app.listen(port, function () {
  console.log(
    `Aplicación ejemplo, CORS enabled, escuchando el puerto ${port} en ${process.env.API_DOCKER_ENV} environment!`
  );
});

module.exports = app;
