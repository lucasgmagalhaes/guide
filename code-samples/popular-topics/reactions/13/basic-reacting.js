const { Client, Intents } = require('discord.js');

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
});

client.once('ready', () => {
	console.log('Ready!');
});

client.on('messageCreate', message => {
	if (message.content === '!react') {
		message.react('😄');
	} else if (message.content === '!react-custom') {
		message.react('123456789012345678');
	} else if (message.content === '!fruits') {
		message.react('🍎')
			.then(() => message.react('🍊'))
			.then(() => message.react('🍇'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}
});

client.login('your-token-goes-here');
