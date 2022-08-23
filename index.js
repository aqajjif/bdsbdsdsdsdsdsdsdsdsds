const express = require('express');

const app = express();

const prefix = '+';

app.get('/', (req, res) => {
  res.send('bot خط ');
});

app.listen(3000, () => {
  console.log('the bot is WORK!');
});

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.TOKEN); ///توكن هنا

client.on('ready', () => {
  console.log(`${client.user.username} ready!`);
  client.user.setActivity(`Miss Line`, { type: 'WATCHING' });
});

client.on('message', async message => {
  if (message.guild.id != '1000409088309600266') return;
  if (message.channel.id != '1010247534507196448') return;
  if (message.author.id === client.user.id) return;
  if (message.author.send) {
    message.channel.send({
      files: [
        'https://media.discordapp.net/attachments/1005212021865844827/1010457467651637338/standard.gif'
      ]
    });
  }
});

client.on('message', async message => {
  if (message.guild.id != '1000409088309600266') return;
  if (message.channel.id != '1010975220691116043') return;
  if (message.author.id === client.user.id) return;
  if (message.author.send) {
    message.channel.send({
      files: [
        'https://media.discordapp.net/attachments/1010975220691116043/1010977515491295242/standard.gif'
      ]
    });
  }
});
client.on('message', async message => {
  if (message.guild.id != '1000409088309600266') return;
  if (message.channel.id != '1011226997088858122') return;
  if (message.author.id === client.user.id) return;
  if (message.author.send) {
    message.channel.send({
      files: [
        'https://media.discordapp.net/attachments/1011226997088858122/1011234237845880873/standard_1.gif'
      ]
    });
  }
});

/// امر الخط
client.on('message', msg => {
  if (msg.content === 'miss') {
    msg.delete();
    msg.reply({ files: ['https://share.creavite.co/H0r0EeHm0FNKSmN4.gif'] });
  }
});
