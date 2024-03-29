const TelegramBot = require('node-telegram-bot-api');
const { messageTypes } = require('node-telegram-bot-api/src/telegram');
const shortUrl = require("node-url-shortener");
const express = require('express'); 
  


// replace the value below with the Telegram token you receive from @BotFather
const token = '7151850785:AAELut7HZ5OCoT5XzrB0amhHqHADdWIgwwg';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/url (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  
shortUrl.short(resp, function (err, url) {
  try{
  console.log("URL SHORTENED!");
  bot.sendMessage(chatId,`SHORTENED URL\n\n` + url);}

  catch(err){
    bot.sendMessage(err)
  }
});
  // send back the matched "whatever" to the chat
  //bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  console.log('Received Message\n');

});

/*bot.onText(/\/start/, (msg, match)=> {
    var text = "*Hey There!* 😉\n*Welcome to @shorturl0_bot* 🤖\n\n *I will shorten your long url for you!...* 😊 \n\n - My Commands are,\n/start - start the bot\n/url - shorten the url sent by you\n\nDeveloped by [ARAbdullaDev](https://t.me/@arabdullah882)"
    var pic_stream = "https://static.vecteezy.com/system/resources/previews/007/225/199/non_2x/robot-chat-bot-concept-illustration-vector.jpg"
    bot.sendMessage(msg.chat.id, text, {reply_to_message_id: msg.message_id});
    //bot.sendPhoto(msg.chat.id, pic_stream, { caption: text , reply_to_message_id: msg.message_id});
});
*/
bot.onText(/\/start/, function onStart(msg) {
  var text = "*Hey There!* 😉\n*Welcome to @shorturl0_bot* 🤖\n\n *I will shorten your long url for you!...* 😊 \n\n - My Commands are,\n/start - start the bot\n/url - shorten the url sent by you\n\nDeveloped by [ARAbdullaDev](https://t.me/@arabdullah882)"
    var pic_stream = "https://static.vecteezy.com/system/resources/previews/007/225/199/non_2x/robot-chat-bot-concept-illustration-vector.jpg"
    //bot.sendMessage(msg.chat.id, text, {reply_to_message_id: msg.message_id});
    //bot.sendPhoto(msg.chat.id, pic_stream, { caption: text , reply_to_message_id: msg.message_id});
  const opts = {
    reply_markup:{
      keyboard: [
        ['Help 🤖'],
      ]
    },
    parse_mode: 'Markdown'
  };
  bot.sendMessage(msg.from.id, text, opts);
});

bot.onText('Help 🤖', (msg, match) =>{
  var text = "Send the url you wanna short with the prefix /url as shown below...\n\n/url https://example.com"
  const opts = {
    reply_markup:{
      keyboard: [
        ['/url https://example.com'],
      ]
    },
    parse_mode: 'Markdown'
  };
  bot.sendMessage(msg.from.id, text, opts);
})

const app = express(); 
const PORT = 80; 

app.get('/', (req, res)=>{ 
  res.status(200); 
  res.send("<h1>Server Running... 🤖</h1>"); 
}); 
  
app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 