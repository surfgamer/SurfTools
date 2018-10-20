const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = ".";

client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!');
});

client.on('message', message => {
	if (message.author.id != client.user.id) return;
	if(message.content.startsWith(`${prefix}embed`)) {
		message.delete();
		const args = message.content.slice('.').trim().split(/ +/g);
        const command = args.shift().toLowerCase();
		var title = args[0];
		var color = args[1];
		var description = args[2];
		message.channel.send({embed: {
			'title': title,
			'color': color,
			'description': description
			}});
	}
});

client.login('token');