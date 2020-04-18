const Discord = require("discord.js");
const fetch = require("node-fetch");

const client = new Discord.Client();

client.once("ready", () => {
  client.user.setActivity(
    " and sending cats in " + client.guilds.cache.size + " servers",
    { type: "WATCHING" }
  );
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.content.trim() == "cat") {
    let embed = new Discord.MessageEmbed();
    const { file } = await fetch("https://aws.random.cat/meow").then(response =>
      response.json()
    );
    embed.setTitle("Your Cat");
    embed.setImage(file);
    embed.setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
    return message.channel.send(embed);
  }
});

client.login(process.env.TOKEN);

