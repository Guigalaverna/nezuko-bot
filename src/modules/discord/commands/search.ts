import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("search")
    .setDescription("Search for a book in library."),
  async execute(int: CommandInteraction) {
    await int.reply("Searching book...");
  },
};
