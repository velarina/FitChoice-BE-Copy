const express = require("express");
const app = express();
const config = require("./config/config");
const router = require("./router/router");
const PORT = config.port;
const sync = require("./models/sync");

sync();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, () => {
  console.log(`server is running out:` + PORT);
});
