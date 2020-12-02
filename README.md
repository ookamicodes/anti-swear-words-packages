# Anti Swear Words Module

 <a href="https://nodei.co/npm/anti-swear-words-packages-discord/"><img src="https://nodei.co/npm/anti-swear-words-packages-discord.png?downloads=true&stars=true" alt="npm installnfo" /></a>

<img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/ookamicodes/anti-swear-words-packages"> <img alt="npm" src="https://img.shields.io/npm/v/anti-swear-words-packages-discord"> <img alt="npm" src="https://img.shields.io/npm/dw/anti-swear-words-packages-discord"> <img alt="npm" src="https://img.shields.io/npm/dt/anti-swear-words-packages-discord">


Add the Anti Swear Word Module in your bot to filter every swear word out.

## Install

```css
npm install anti-swear-words-packages-discord
```

## Usage Example

```javascript
const antiSwearWords = require("anti-swear-words-packages-discord")

        antiSwearWords(client, message, {
            warnMSG: `<@${message.author.id}> , why are you writing this?`, 
            // warn message option || when not then = `<@${message.author.id}> dont use swear words.` 
            // Behind the warnMSG will be an Warn Count
            ignoreWord: ["ignoreThis", "andignoreThis", "alsoIgnoreThis"],
            customWord: ["aCustomWord", "anotherCustomWord"],
            muteRole: "ROLE ID",  // ID of the Role
            muteCount: 10,        // Number when the user get muted
            kickCount: 20,        // Number when the user get kicked
            banCount: 30,         // Number when the user get banned
        });
                             
```

### Example
```javascript
const Discord = require('discord.js')                               //discord.js
const client = new Discord.Client();                                //discord client
const antiSwearWords = require("anti-swear-words-packages-discord") //my module

// console log when ready
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)                  
})

// Module Setup
client.on('message', async message => {
           antiSwearWords(client, message, {
            warnMSG: `<@${message.author.id}> , why are you writing this?`, 
            // warn message option || when not then = `<@${message.author.id}> dont use swear words.` 
            // Behind the warnMSG will be an Warn Count.
            ignoreWord: ["ignoreThis", "andignoreThis", "alsoIgnoreThis"],
            customWord: ["aCustomWord", "anotherCustomWord"],
            muteRole: "ROLE ID",  // ID of the Role
            muteCount: 10,        // Number when the user get muted
            kickCount: 20,        // Number when the user get kicked
            banCount: 30,         // Number when the user get banned
        });                         
});

// Client Login
client.login('token')                                               

```

### Warn Count System

We use [quick.db](https://www.npmjs.com/package/quick.db) as a better-sqlite3 database where the warning count can store easier. Ookamicodes Development arent the creators of this module. If the warning system isnt working, you need to install [quick.db](https://www.npmjs.com/package/quick.db) first. 
`npm i quick.db`

Docs: https://quickdb.js.org

## Support

Join the support server: [CLICK ME](https://discord.gg/BfXR36R8Gq)