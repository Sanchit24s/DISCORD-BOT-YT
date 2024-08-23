const { REST, Routes } = require("discord.js");
const commands = [
    {
        name: "create",
        description: "Creates a new short URL",
    },
];

const rest = new REST({ version: '10' }).setToken(
    "MTE5NDYzOTAzNDI1ODA1MTA3Mg.GQFLRs.n97arL1QMSlAbrC4hidaYLNlwFUurYVt_PhqHk"
);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
        
        await rest.put(Routes.applicationCommands("1194639034258051072"), { body: commands });
        
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();