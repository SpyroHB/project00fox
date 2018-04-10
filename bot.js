const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
const fs = require('fs'); 
const devs = ["171259176029257728","343383616895713290"];
client.login(process.env.SECERT_KEY);
client.once('ready', () => {
    console.log("---------------------");
    console.log("[Abayro] READY");
    console.log("---------------------");
    client.user.setActivity('N/A yet, f!', {type: "PLAYING"})
});
client.on('error', console.error);
///////////GUILD/////////////////
client.on('guildMemberAdd', member => {
    var Canvas = require('canvas-prebuilt');
    var jimp = require('jimp');
    Canvas.registerFont('./assets/OpenSans-ExtraBold.ttf', {family: 'Open Sans'})
    let memberavatar = member.user.avatarURL
      let welcomer = member.guild.channels.find('name', "welcome");
        if (!welcomer) return;     
       const w = ['./assets/w1.jpg','./assets/w2.jpg','./assets/w3.jpg','./assets/w4.jpg','./assets/w6.jpg'];
        let Image = Canvas.Image,
            canvas = new Canvas.createCanvas(401, 202),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'black';
        ctx.shadowColor = 'black';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 10;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 401, 202);

})

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        //Avatar
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.drawImage(ava, 152, 27, 95, 95);
                        
                                                //text
                        ctx.font = '20px "Open Sans"';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(`Welcome to ${member.guild.name}`, 210, 154);
                        
                        //ur name
                        ctx.font = '20px "Open Sans"';
                        ctx.fillStyle = "#ff7f7f";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 210, 190);
                        
welcomer.sendFile(canvas.toBuffer())
welcomer.send(`Welcome To **${member.guild.name}**, ${member}! You are The **${member.guild.memberCount}** user!`);
})
})
      });
///////////////////////////////

client.on('message', async message => {
let prefix = "f!";
let cmd = message.content.split(" ")[0];
cmd = cmd.slice(prefix.length);
const args = message.content.split(" ").slice(1);
///////////////////!! D E V E L O P E R S !!///////////////////////////////
// Sorry Spyro, this cause erros!

// if (message.content.startsWith(prefix + 'ply')) {
//     var argresult = message.content.split(` `).slice(1).join(' ');
//     if (!devs.includes(message.author.id)) return;
//     client.user.setGame(argresult);
//       message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
//   } else 
//   if (message.content.startsWith(prefix + 'wt')) {
//   client.user.setActivity(argresult, {type:'WATCHING'});
//       message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
//   } else 
//   if (message.content.startsWith(prefix + 'ls')) {
//   client.user.setActivity(argresult , {type:'LISTENING'});
//       message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
//   } else     
//     if (message.content.startsWith(prefix + 'setavatar')) {
//   client.user.setAvatar(argresult);
//     message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
//         } else     
//           if (message.content.startsWith(prefix + 'setname')) {
//   client.user.setUsername(argresult).then
//       message.channel.sendMessage(`**${argresult}** : Done :>`)
//   return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
// } else
//   if (message.content.startsWith(prefix + 'st')) {
//     client.user.setGame(argresult, "https://www.twitch.tv/idk");
//       message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
//   }
///////////////////!! D E V E L O P E R S !!///////////////////////////////

if(cmd === 'help') {
    message.channel.send(new Discord.RichEmbed() 
    .setTitle(`Commands List (3)`)
    .setDescription('Use ' +  `**${prefix}[command]** `+'to get help,examples about a command!\n')
    .addField(":diamond_shape_with_a_dot_inside: General", "`a!help`\n`a!fortnite`\n`a!ping`", true) // \n`a!example`
    //
    .addField(":shield: Moderation", "Waiting for commands...", true)
    .setColor("00FF00")
);
}

if (cmd === 'fortnite') {
const Fortnite = require('fortnite');
const ft = new Fortnite('1010ab16-8f67-414a-a0b5-13d9e8b93954');
let username = args[0];
let platform = args[1] || "pc";
if(!username) {
    let embed = new Discord.RichEmbed()
    .setTitle('a!fortnite') 
    .setDescription(`**Usage:** ${prefix}fortnite [user] [platform]\n**Example:** a!fortnite Ninja`)
    return message.channel.send(embed)
}
let data = ft.getInfo(username, platform).then(data => {
let stats = data.lifetimeStats;
let kills = stats.find(s => s.stat == 'kills')
let wins = stats.find(s => s.stat == 'wins')
let win = stats.find(s => s.stat == 'win')
let kd = stats.find(s => s.stat == 'kd')
let mp = stats.find(s => s.stat == 'matchesPlayed')
let tp = stats.find(s => s.stat == 'timePlayed')
let rank = stats.find(s => s.stat == 'top25s')
message.channel.send(new Discord.RichEmbed()
.setAuthor(`Fortnite Stats for ${username}`)
.addField('Kills', kills.value, true)
.addField('Platform', platform, true)
.addField('Wins', wins.value, true)
.addField('Win Rate', win.value, true)
.addField('K/D', kd.value, true)
.addField('Matches Played', mp.value, true)
.addField('Time Played', tp.value, true)
.addField('Leaderborad', rank.value, true)
.addField('More Info', `https://fortnitetracker.com/profile/${platform}/${username}`)
);
}).catch(e => {
message.channel.send(new Discord.RichEmbed()
.setAuthor('Error', "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_48-32.png")
.setDescription(`Didn't Find ${username} in ${platform} database`)
);
}); 
}

if(cmd === 'ping') {
    const pinging = await message.channel.send("**Pinging**");
    pinging.edit(`**:ping_pong: TimeTaken:** \`${pinging.createdTimestamp - message.createdTimestamp}ms\`` + `\n **:heartpulse: Discord API:** \`${Math.round(client.ping)}ms\``);
}


if (cmd ==="server") {
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
    const days = millis / 1000 / 60 / 60 / 24;
    let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
    message.channel.send(new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField("**🆔 Server ID**", "**"+message.guild.id+"**",true)
    .addField("**👑 Server Owenr**", "**"+message.guild.owner+"**" ,true)
    .addField("**🌍 Server Region**" , "**"+message.guild.region+"**",true)
    .addField('**💬 Text Channels**',`**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`,true)
    .addField("**📣 Voice Channels**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `,true)
    .addField("**🤔 Server Created Days**", ` ** [ ${days.toFixed(0)} ] ** Day ` ,true)
    .addField("**👔 Ranks **",`**[${message.guild.roles.size}]** Role `,true)
    .addField("**💠 Security Level**", ` ** [ ${verificationLevels[message.guild.verificationLevel]} ] ** `,true)
    
    .addField("👥Members Count",`**${message.guild.memberCount}**`)
    .setThumbnail(message.guild.iconURL)
    .setColor('RANDOM')
    )}

    if(cmd === "store-report") {
        let args = args.join(" ");
        if (!args[1])
     return message.channel.send(`**${prefix}report <Your  Problem here>**`);
      const embed = new Discord.RichEmbed()
      .addField('**Sender**', message.author.tag)
      .addField('Report', args)
      .setColor('RANDOM')
      .setThumbnail("https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678136-shield-warning-256.png")
      .setFooter(message.author.username, message.author.avatarURL)
     .setTimestamp()
      client.channels.get('433258716759064577').send(embed);
      const embed21 = new Discord.RichEmbed()
      message.channel.send('**Thanks for reporting a problem, we will try as hard as we can to help you**').then((message)=> { 
        message.delete(1000, args)
      }
    )}
    //////////
});
