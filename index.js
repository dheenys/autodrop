const Discord = require("discord.js");
const config = require('./config');

const { Client } = require('discord.js-selfbot-v13');
const client = new Client({
  checkUpdate: false
});

var timer = 0;
function sleep(ms) {
  timer += ms
  return new Promise(resolve => setTimeout(resolve, ms))
}
function ranInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function log(type = 'UNKNOWN', content) {
  console.log(
      `\x1b[43m${new Date().toLocaleTimeString('VN')}${type === "info" ? "\x1b[0m\x1b[34m [INFO]"
          : type === "sent" ? "\x1b[0m\x1b[92m [SENT]"
              : type === "alert" ? "\x1b[0m\x1b[31m [ALERT]"
                    : type === "success" ? "\x1b[0m\x1b[43m [SUCCESS]"
                          : type === "stop" ? "\x1b[0m\x1b[31m [STOP]"
                                : type === "start" ? "\x1b[0m\x1b[31m [START]"
      									: type === "pc" ? "\x1b[0m\x1b[31m [Pray/curse]"
                                      : `\x1b[0m\x1b[93m [${type}]`}` +
      `\x1b[0m ${content}`
  )
}
require('dotenv').config();

let bot = {
  client,
  prefix: config.prefix,
  owners: process.env.OWNER
};

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload);
client.loadCommands = (bot, reload) =>
  require("./handlers/commands")(bot, reload);

client.loadEvents(bot, false);
client.loadCommands(bot, false);

client.on('ready', () => {
  client.user.setStatus('dnd');
})

client.on("messageCreate", async message => {

  if(message.author.id == "646937666251915264"){
    if(message.content.includes(`dropall`) || message.content.includes(`<@${client.user.id}> drop`)){
      message.channel.send("kdrop")
    }   
  }


  if(message.channel.type == "DM"){
    if(message.author.id == "646937666251915264"){
      if(message.content.includes(`⏰ Your drop is now off cooldown.`)){
        await sleep(ranInt(2000, 3890))
        client.channels.cache.get(process.env.channelD).send("kdrop")
      }   
    }
  }

  if(message.author.id=="646937666251915264"){
    if(message.content.includes(`<@${client.user.id}> is dropping 3 cards!`)){
      var reaction = ['1️⃣', '2️⃣', '3️⃣']
      let react = reaction[Math.floor(Math.random() * reaction.length)]
      await sleep(ranInt(2000, 3890))
      message.react(react);
    }
  }

  if(message.author.id == "646937666251915264"){
    if(message.content.includes(`<@${client.user.id}> took the`)){
      await sleep(ranInt(2000, 3789))
      client.channels.cache.get(process.env.channelD).send("klu")
    }
  }
  
  //if(message.author.id == "646937666251915264"){
    //if(message.content.includes(`, answer the`)){
    //  await sleep(ranInt(2000, 3789))
      //await message.clickButton();
    //}
  //}


  if(message.channel.type == "DM"){
    if(message.author.id == "646937666251915264"){
      if(message.content.includes(`⏰ Your daily is now off cooldown.`)){
        await sleep(ranInt(6000, 60000))
        client.channels.cache.get(process.env.channelD).send("kdaily")
      }   
    }
  }
});


client.login(process.env.TOKEN);
