const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("530469983097061376")
setInterval(function() {
channel.send(`BCy EMPIresBCyEMPIresBCy`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
