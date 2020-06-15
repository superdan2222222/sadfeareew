const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', () => {
    console.log('Logged in')
});

client.login()
