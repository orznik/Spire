const Discord = require('discord.js');
const bot = new Discord.Client();
const helpers = require('./includes/_helpers');

const token = 'NjU3Mjc1Njk1MjgxNzMzNjMy.XfvSJg.EWcgXZVHsivj42DIJG93XEreYvg';

bot.on('ready', () => {
    console.log('This bot is online!');
})

bot.on('message', msg => {
    console.log(msg)
    if(msg.content === "HELLO"){
        msg.reply('Hi how are you');
    }
})

// console.log(helpers.findRandomNum(20));

// enemys
// dealer
// cards
// player
// rooms
// helpers


bot.login(token);