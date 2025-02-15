const { MessageType } = require('@adiwajshing/baileys');
const axios = require('axios');

// Send joke
const sendJoke = async (from, bot) => {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
    const joke = response.data.setup + " - " + response.data.punchline;
    bot.sendMessage(from, joke, MessageType.text);
};

// Send meme
const sendMeme = async (from, bot) => {
    const response = await axios.get('https://meme-api.com/memes/random');
    const meme = response.data[0].url;
    bot.sendMessage(from, meme, MessageType.image);
};

// Send sticker (using a link or media)
const sendSticker = async (from, bot) => {
    const imageUrl = 'https://example.com/sticker.jpg'; // Replace with a real sticker URL
    bot.sendMessage(from, imageUrl, MessageType.image, { mimetype: 'image/jpeg', caption: 'Here is your sticker!' });
};

module.exports = { sendJoke, sendMeme, sendSticker };
