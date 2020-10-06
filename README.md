# Anti Swear Words Module

Add the Anti Swear Word Module in your bot to filter every swear word out.

## Install

```js
npm install anti-swear-words-packages-discord
```

### Example
```
const Discord = require('discord.js')                               //discord.js
const client = new Discord.Client();                                //discord client
const antiSwearWords = require("anti-swear-words-packages-discord") //my module

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)                 //console log when ready
});

client.on('message', async message => {
antiSwearWords(client, options);                                   //module function
}

client.login("token")                                               //client login

```

## Support

Join the support server: [CLICK ME](https://discord.gg/FGzCdtP)