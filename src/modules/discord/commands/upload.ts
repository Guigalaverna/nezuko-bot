import { SlashCommandBuilder } from "@discordjs/builders";
import { Client, CommandInteraction, Message } from "discord.js";

export default {
  async execute(
    client: Client<boolean>,
    message: Message<boolean>,
    args: string[]
  ) {
    const languageOfTheBook = args[0];
    const categorySelected = args[1];
    const titleOfTheBook = args[2];
    const book = message.attachments.first();

    if (!book?.name?.endsWith(".pdf")) {
      message.reply({
        content: "Apenas livros em PDF por favor ❤️",
      });
      message.delete();
      return;
    }

    if (!languageOfTheBook || !categorySelected || !titleOfTheBook || !book)
      return;
  },
};
