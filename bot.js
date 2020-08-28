const { Client } = require("discord.js");
const $ = require("discord.js").MessageEmbed;
const fetch = require("node-fetch");

const client = new Client();

client.once("ready", () => {
  client.user.setActivity(
    " and sending cats in " + client.guilds.cache.size + " servers",
    { type: "WATCHING" }
  );
});

client.on("message", async message => {
  if (message.author.bot || message.content.trim() == "") return;
  if (message.content.toLowerCase().trim() == "cat") {
    const { file } = await fetch("https://aws.random.cat/meow").then(response =>
      response.json()
    );
    return message.channel.send(new $().setColor("RANDOM").setTitle("Your Cat").setImage(file));
  }
});

client.login(process.env.TOKEN);
