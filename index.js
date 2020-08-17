const {Client} = require('discord.js');
const client = new Client();

var cookies = 0
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
    client.user.setActivity('' + cookies + ' cookies.', { type: 'WATCHING' });
});

client.on('message', message => {
    if (message.member.user.bot) return;
    
    if (message.content == "cookieupdate" || message.content == "Cookieupdate") {
        client.user.setActivity('' + cookies + ' cookies.', { type: 'WATCHING' });
    }

    if (message.content == "cookie" || message.content == "Cookie") {
        var newCookies = cookies + 1;

        cookies = newCookies
        client.user.setActivity('' + newCookies + ' cookies.', { type: 'WATCHING' });
        message.channel.send('Cookies: ' + newCookies)
    } else {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.delete();
        } else {
            return;
        }
    }

})

client.login(process.env.token);