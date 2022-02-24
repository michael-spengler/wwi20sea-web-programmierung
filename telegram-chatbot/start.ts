import { TelegramBot, UpdateType } from "https://deno.land/x/telegram_chatbot/mod.ts"

const TOKEN = Deno.args[0]

console.log(TOKEN)
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);

console.log(UpdateType.Message)
bot.on(UpdateType.Message, async (message: any) => {

    console.log("haha")
    const text = message.message.text || "I can't hear you";

    await bot.sendMessage({ chat_id: message.message.chat.id, text: `selber ${text}` })

});

bot.run({
    polling: true,
});