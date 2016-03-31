require('dotenv').config();

var Bot = require('slackbots');

var bot = new Bot({
	token: process.env.BOT_TOKEN,
	name: process.env.BOT_NAME
});

console.log(process.env);

bot.on('start', function() {
	bot.postMessageToChannel('general', 'Hello channel');
	bot.postMessageToUser('rjbernaldo', 'Hello bro');
});
