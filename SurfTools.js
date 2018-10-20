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
	if(message.content.startsWith(`${prefix}parabola`)) {
		message.delete();
		const args = message.content.slice('.').trim().split(/ +/g);
        const command = args.shift().toLowerCase();
		var a = args[0]*1;
		var b = args[1]*1;
		var c = args[2]*1;
		var x = -b/(2*a);
		var y = a*x**2+b*x+c;
		message.channel.send({embed: {
			'title': 'y(x)='+a+'x**2+('+b+')x+('+c+')',
			'color': '16777011',
			'description': '('+x+';'+y+')'
		}});
	}
});

client.login(process.env.TOKEN);
