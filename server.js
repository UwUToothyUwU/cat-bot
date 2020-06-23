//For glitch apps, if you're using heroku or something you might need this too, otherwise change package.json "start" to "bot.js"
const express = require("express");
const app = express();

require("./bot.js");
// https://expressjs.com/en/starter/basic-routing.html
app.get("/*", (request, response) => {
  response.status(200);
  response.send("200");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Listening on port " + listener.address().port);
});
