import { Client, Message, MessageEmbed } from "discord.js";

import languages from "@configurations/languages.json";
import { downloadFile } from "src/utils/downloadFile";
import path from "path";
import { createEmbed } from "../embeds/upload";

export default {
  async execute(
    client: Client<boolean>,
    message: Message<boolean>,
    args: string[]
  ) {
    const languageOfTheBook = languages.filter(lang => lang.name === args[0]);
    const categorySelected = args[1];
    const titleOfTheBook = args.slice(2).join(" ");
    const book = message.attachments.first();

    if (!book?.name?.endsWith(".pdf")) {
      message.reply({
        content: "Apenas livros em PDF por favor ❤️",
      });
      message.delete();
      return;
    }

    if (!languageOfTheBook) {
      message.reply("Não sei qual é o idioma do material");
      message.delete();
      return;
    }

    if (!categorySelected) {
      message.reply("Qual é a categoria?");
      message.delete();
      return;
    }

    if (!titleOfTheBook) {
      message.reply("Todo livro tem um título, esse tem?");
      message.delete();
      return;
    }

    if (!book) {
      message.reply("Cade o livro?");
      message.delete();
      return;
    }

    try {
      await downloadFile(
        book.url,
        book.name.replace(/\s/g, "_").replace("-", "")
      );
      const embed = createEmbed({
        authorOfThePost: message.author,
        categorySelected,
        languageOfTheBook,
        titleOfTheBook,
      });

      message.reply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
    }
  },
};
