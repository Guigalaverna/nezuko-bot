import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("upload")
    .setDescription("Uploads a book to the library."),
  async execute(int: CommandInteraction) {
    await int.reply("Uploading book...");
  },
};
