const TelegramBot = require('node-telegram-bot-api');
const { messageTypes } = require('node-telegram-bot-api/src/telegram');

// replace the value below with the Telegram token you receive from @BotFather
const token = '7033173272:AAHbK8HsSFe3Og3vXqn1KiidCQhSyYr-RyQ';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  console.log('Received Message\n');

});

bot.onText(/\/start/, (msg, match)=> {
    var text = "Hey There! 😉\nWelcome to @arabdulladevbot 🤖\n\n - My Commands are,\n/start - start the bot\n/echo - echo the message sent by you\n\nDeveloped by @arabdullah882"
    var pic_stream = "https://static.vecteezy.com/system/resources/previews/007/225/199/non_2x/robot-chat-bot-concept-illustration-vector.jpg"
    //bot.sendMessage(msg.chat.id, text, {reply_to_message_id: msg.message_id});
    bot.sendPhoto(msg.chat.id, pic_stream, { caption: text , reply_to_message_id: msg.message_id});
});