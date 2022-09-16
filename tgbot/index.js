const TelegramApi = require("node-telegram-bot-api");
const token = "5619564242:AAHTa6dvzRJFTmhdwQzVdaVTapNbCiUYwro";
const bot = new TelegramApi(token, { polling: true });
const idChatOrders = "-723744791";
const idChatArchy = "1012193";

bot.setMyCommands([
  { command: "/start", description: "Начальное приветствие" },
  { command: "/info", description: "Информация о тебе" },
]);

bot.on("message", async (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  console.log(msg);

  // bot.sendMessage(chatId, `Ты написал мне - ${text}`);

  if (text === "/start") {
    await bot.sendSticker(
      chatId,
      "https://tlgrm.ru/_/stickers/8a0/d60/8a0d60fb-4bc8-3cc4-95e8-1125454d9c81/10.webp"
    );
    await bot.sendMessage(chatId, "Добро пожаловать )))");
    await bot.sendMessage(chatId, "Я бот, так что не перепутай ))");
  }

  if (text === "/info") {
    await bot.sendMessage(
      chatId,
      `Тебя зовут ${msg.from.first_name} и ${msg.from.username}`
    );
    await bot.sendMessage(chatId, `Id этого чата ${chatId}`);
  }
});
// https://api.telegram.org/bot5619564242:AAHTa6dvzRJFTmhdwQzVdaVTapNbCiUYwro/METHOD_NAME
