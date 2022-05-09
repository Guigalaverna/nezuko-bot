import { BotAdapter } from "../../../@types/adapters/BotAdapter";
import { ChalkAdapter } from "../ChalkAdapter";
import { Command } from "../../../@types/Command";

import { config } from "dotenv";

import { Client, Intents } from "discord.js";

import path from "path";

config({
  path: path.join(__dirname, "..", "..", "..", ".env"),
});

export class DiscordAdapter implements BotAdapter {
  async connect(): Promise<void> {
    const token = process.env.DISCORD_TOKEN!;
    const prefix = process.env.BOT_PREFIX!;

    const client = new Client({
      intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    });

    client.on("messageCreate", async message => {
      if (message.author.bot) return; // if the message is from a bot, ignore it
      if (message.channel.type === "DM")
        // if the messages comes from a DM, ignore it
        return;

      if (!message.content.toLowerCase().startsWith(prefix)) return; // if the message doesn't start with the prefix, ignore it

      // parse message and separate the command and the arguments
      const args = message.content.trim().slice(prefix.length).split(/ +/g); // trim and split the message by spaces

      // if no arguments were passed, ignore it
      if (args.length === 0) {
        message.reply("Os argumentos são nescessários");
        message.delete();
        return;
      }

      const command = args.shift()?.toLowerCase(); // get the command and remove it from the args array

      try {
        const commandFile: Command = require(path.join(
          __dirname,
          "commands",
          `${command}.ts`
        )).default; // get the command file

        commandFile.execute(client, message, args);
      } catch (err) {
        console.error(err);
        message.reply("Ocorreu um erro ao executar o comando");
        message.delete();
        return;
      }
    });

    client.login(token);
  }
}
