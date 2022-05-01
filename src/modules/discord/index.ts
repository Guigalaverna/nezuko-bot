import { Client, Collection, Intents } from "discord.js";
import * as fs from "fs";
import * as path from "path";

export const Discord = {
  async init() {
    const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
    const token = process.env.DISCORD_TOKEN!;

    client.commands = new Collection();

    const commandFiles = fs
      .readdirSync(path.join(__dirname, "commands"))
      .filter(command => command.endsWith(".ts"));

    for (const file of commandFiles) {
      const command = require(`./commands/${file}`).default;

      client.commands.set(command.data.name, command);
    }

    client.once("ready", () => {
      console.log("[module] - Discord ready");
    });

    client.on("interactionCreate", async interaction => {
      if (!interaction.isCommand()) return;

      const command = client.commands.get(interaction.commandName);

      if (!command) return;

      try {
        await command.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      }
    });

    client.login(token);
  },
};
