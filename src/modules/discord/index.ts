// @ts-expect-error
import { Command } from "@types/Command";
import { Client, Intents } from "discord.js";
import path from "path";
export class Discord {
  async init() {
    const client = new Client({
      intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    });

    const configs = {
      token: process.env.DISCORD_TOKEN!,
      prefix: process.env.BOT_PREFIX!,
    };

    client.once("ready", () => {
      console.log("[module] - Discord ready");
    });

    client.on("messageCreate", async message => {
      if (message.author.bot) return; // if the message is from a bot, ignore it
      if (message.channel.type === "DM")
        // if the messages comes from a DM, ignore it
        return;

      if (!message.content.toLowerCase().startsWith(configs.prefix)) return; // if the message doesn't start with the prefix, ignore it

      // parse message and separate the command and the arguments
      const args = message.content
        .trim()
        .slice(configs.prefix.length)
        .split(/ +/g); // trim and split the message by spaces

      // if no arguments were passed, ignore it
      if (args.length === 0) {
        message.reply("Os argumentos são nescessários");
        message.delete();
        return;
      }

      const command = args.shift()?.toLowerCase(); // get the command and remove it from the args array

      try {
        const commandFile: Command = await import(
          path.join(__dirname, "commands", `${command}.ts`)
        ); // get the command file
        commandFile.execute(client, message, args);
      } catch (err) {
        console.error(err);
        message.reply("Ocorreu um erro ao executar o comando");
        message.delete();
        return;
      }
    });

    client.login(configs.token); // start bot
  }
}
