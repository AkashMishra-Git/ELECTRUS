var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = ".help" //The text before commands, you can put anything that you prefer

    if(message.author.id != "811063705126174721" && message.channel.id === "802565242105233408"){
        if(msg.startsWith('>', 0)){
            if(msg === prefix + "hello" && message.channel.id === "802565242105233408"){
                message.channel.send('Wait a Staff Will help you Shortly @Staff') // Sends a message to the channel, with the content
            }
            else{
                message.channel.send("Hey, I only understand .help and .help hello right now. More will be added soon. :) ")
            }
        }
        else{
            message.delete();
            message.channel.send(sender + " this bot only accepts commands which starts with '.help' Peace.");
        }
    }
});

bot.login(process.env.BOT_TOKEN)
