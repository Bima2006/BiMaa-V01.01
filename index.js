const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
const { exec } = require('child_process');
const { SESSION_ID } = require('./config');
const { sendJoke, sendMeme, sendSticker } = require('./commands');

const bot = new WAConnection();

bot.on('qr', qr => {
    console.log('QR කේතය scan කරලා කනෙක්ට් වන්න:', qr);
});

bot.on('open', () => {
    console.log('Bot එක සාර්ථකව සම්බන්ධ වුනා');
});

bot.on('message-new', async (message) => {
    const { from, body } = message;

    // Auto-reply feature
    if (body === 'hello') {
        bot.sendMessage(from, 'ආයුබෝවන්, මට උදව් කරන්නෙ කොහොමද?', MessageType.text);
    }

    // Fun commands
    if (body === '!joke') {
        sendJoke(from, bot);
    } else if (body === '!meme') {
        sendMeme(from, bot);
    } else if (body === '!sticker') {
        sendSticker(from, bot);
    }

    // YouTube / MP3 downloader
    if (body.startsWith('!download')) {
        let url = body.split(' ')[1];
        bot.sendMessage(from, `Downloading from ${url}...`, MessageType.text);
        // Add YouTube downloader logic here
    }

    // Custom commands can be added here
});

bot.connect();
