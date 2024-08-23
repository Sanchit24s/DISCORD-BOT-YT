const { Client, GatewayIntentBits } = require("discord.js");
const { connectToMongoDB } = require("./connect");
const shortid = require("shortid");
const URL = require("./url");

connectToMongoDB("mongodb://localhost:27017/telegram-bot")
    .then(() => console.log("Mongodb connected"));

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith("create")) {
        const url = message.content.split("create")[1];
        const shortId = shortid();
        const userName = message.author.username;
        
        await URL.create({
            userName: userName,
            originalURL: url,
            shortId: shortId,
        }).catch(error => console.error("Error creating URL:", error));

        return message.reply({
            content: "Generating Short ID for " + url +
                "\nYour shortid is " + shortId,
        });
    }
    message.reply({
        content: "Hi From Bot",
    });
});

client.on("interactionCreate", (interaction) => {
    console.log(interaction);
    interaction.reply("Pong!!");
});

client.login("MTE5NDYzOTAzNDI1ODA1MTA3Mg.GQFLRs.n97arL1QMSlAbrC4hidaYLNlwFUurYVt_PhqHk");