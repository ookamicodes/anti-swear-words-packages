# Anti Swear Words Module

<img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/ookamicodes/anti-swear-words-packages"> <img alt="npm" src="https://img.shields.io/npm/v/anti-swear-words-packages-discord"> <img alt="npm" src="https://img.shields.io/npm/dw/anti-swear-words-packages-discord">

[![NPM][npm-icon]][https://nodei.co/npm/anti-swear-words-packages-discord/]

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
})

client.on('message', async message => {
antiSwearWords(client, message);                                   //module function
})

client.login(token)                                               //client login


```

## Support

Join the support server: [CLICK ME](https://discord.gg/FGzCdtP)