import TelegramBot from "node-telegram-bot-api";

export const bot = new TelegramBot(
  "1130656027:AAEMHLQARgC1XKfbqGSTpN4_GHpn6fZxO-U",
  {
    polling: false,
  }
);

bot.on("text", (message) => bot.sendMessage(message.chat.id, "Hello, world"));
bot.setWebHook(
  'https://telegram-bot-test-000001.herokuapp.com/bot1130656027:AAEMHLQARgC1XKfbqGSTpN4_GHpn6fZxO-U'
);
