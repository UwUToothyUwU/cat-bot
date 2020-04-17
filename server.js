// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

require("./bot.js");
// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.status(200);
  response.send("200");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
