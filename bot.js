const webhookFinder = require('./index')

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if(message.content.startsWith('!find')) {
      webhookFinder.find("pepe", message.guild)
  }
  if(message.content.startsWith('!send')) {
    webhookFinder.send("pepe", "hello", message.guild)
}
});

client.login('NzI4NjY0MjU5MTg5Mjc2NzUz.Xv9reQ.cxZ2mWF0auoSZk4oh2S-DfodC7I');