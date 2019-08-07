const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('BOT ADI  \'Buyur benim istatistiklerim', bot.user.avatarURL)
  .addField("» **Botun Sahibi**", "<478662196113702942>| ŤØŁƓA#2759")
  .addField("»  **Geliştirici** ","<478662196113702942>")
  .addField("» **Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("» **Çalışma süresi**", seksizaman)
  .addField("» **Kullanıcılar**" , bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» **Sunucular**", bot.guilds.size.toLocaleString(), true)
  .addField("» **Kanallar**", bot.channels.size.toLocaleString(), true)
  .addField("» **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("» **Node.JS sürüm**", `${process.version}`, true)
  .addField("» **Ping**", bot.ping+" ms", true)
  .addField("» **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("» **Bit**", `\`${os.arch()}\``, true)
  .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``) 
  .addField("**» Bot Davet**", " [Davet Et](https://discordapp.com/oauth2/authorize?client_id=606446924979109889&scope=bot&permissions=2146958847)", )
  .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/9s6AKjg)", )
  .addField("**» Voteleme sayfası**", " [Botu votele](https://discordapp.com/oauth2/authorize?client_id=606446924979109889&scope=bot&permissions=2146958847)", )
 return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i', 'YEDEK KOMUT2'],
  permLevel: 0
};

exports.help = {
  name: "istatistik2",
  description: "Bot i",
  usage: "istatistik2"
};