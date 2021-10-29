const { MessageEmbed } = require("discord.js");
const discord = require("discord.js");
const data = require('quick.db');

module.exports = (client, message, options) => { 

 let warnMSG = (options && options.warnMSG) || `<@${message.author.id}> dont use swear words!`;
 let customWord = (options && options.customWord) || ["aSuperCoolerCustomPlaceHolder", "aOtheraSuperCoolerCustomPlaceHolder" ];
 let ignoreWord = (options && options.ignoreWord) || ["aooCusPlHor", "aSCorCuPlaeer" ];
 let muteRole = (options && options.muteRole);
 let muteCount = (options && options.muteCount);
 let kickCount = (options && options.kickCount);
 let banCount = (options && options.banCount);

 const memberUSR = message.member
 const user = message.author.id
 const warnCount = data.get(`warnings_${message.guild.id}_${user}`)
 const mutedRole = message.guild.roles.cache.find(role => role.name === muteRole);
 
 if(warnCount === null) {
     let warnCount = data.set(`warnings_${message.guild.id}_${user}`, 0)
}


let ENW = ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "clitoris", "clits", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cokmuncher", "coksucka", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "xrated", "xxx"];
let DEW = ["Arschgeige", "Trantüte", "Spargeltarzan", "Lustmolch", "Flachwichser", "Pissnelke", "Fickfehler", "Tratschtante", "Stinkstiefel", "Hosenscheisser", "Schlappschwanz", "Hackfresse", "Allmannshure", "Andächtler", "Arschgucker", "Arschkröte", "Arschloch", "Bartputzer", "Dickscheißer", "Donnermaul", "Scheiss", "Scheisse", "Fick", "F1ck", "fick", "f-i-c-k", "Fickdich", "Fickdick", "Huren", "Hurensohn", "Sclampe", "Schlampen", "Schlampenficker", "Misgeburt", "Missgeburt", "Wichser", "Wicser", "Wixer", ];
let foundInTextWord = false;

if (message.content.startsWith(`antiswear!reset`)) { 
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`You dont have the permission to run this command!`);
    resUser = message.content.replace("antiswear!reset ", "");
    data.set(`warnings_${message.guild.id}_${resUser}`, 0)
}

for (var i in ENW){
    if (message.content.toLowerCase().includes(ENW[i].toLowerCase())) foundInTextWord = true;
}
for (var i in DEW){
    if (message.content.toLowerCase().includes(DEW[i].toLowerCase())) foundInTextWord = true;
}
for (var i in customWord){
    if (message.content.toLowerCase().includes(customWord[i].toLowerCase())) foundInTextWord = true;
}
for (var i in ignoreWord){
    if (message.content.toLowerCase().includes(ignoreWord[i].toLowerCase())) foundInTextWord = false;
}

if (foundInTextWord){
   if(message.member.hasPermission("ADMINISTRATOR")) return;
      let warnCount = data.add(`warnings_${message.guild.id}_${user}`, 1)
          message.delete();
              message.channel.send(`${warnMSG} | You got **${warnCount}** warning(s)!`)
       if(warnCount === muteCount) {
        message.member.roles.add(mutedRole)
        message.channel.send(`You got **${warnCount}** warning(s)! | Action: Muted | Reason: ${muteCount} warnings.`)
       }
       if(warnCount === kickCount) {
        message.channel.send(`You got **${warnCount}** warning(s)! | Action: Kicked | Reason: ${kickCount} warnings.`)
        message.member.kick()
       }
       if(warnCount === banCount) {
        message.channel.send(`You got **${warnCount}** warning(s)! | Action: Banned | Reason: ${banCount} warnings.`)
        message.member.ban()
    }
    }

}
