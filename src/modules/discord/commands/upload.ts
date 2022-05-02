import { Client, Message, MessageEmbed } from "discord.js";

import languages from "@configurations/languages.json";
import { downloadFile } from "src/utils/downloadFile";
import path from "path";
import { Embed } from "../lib/createEmbed";

const errorMessages = {
  language: 'Todo livro tem um **idioma**!',
  category: 'Em que **categoria** este livro se encaixa!',
  title: 'Qual é o **nome** do livro?',
  file: 'O principal faltou? Envie o **arquivo** do livro!',
  everythingIsMissing: 'Tudo que eu preciso saber é o **idioma**, **categoria**, **nome** e **arquivo**!',
}


export default {
  async execute(
    client: Client<boolean>,
    message: Message<boolean>,
    args: string[]
  ) {
    const languageOfTheBook = languages.filter(lang => lang.name === args[0])[0];
    const categorySelected = args[1];
    const titleOfTheBook = args.slice(2).join(" ");
    const book = message.attachments.first();

    if (!languageOfTheBook || !categorySelected || !titleOfTheBook || !book) {
      return message.reply(errorMessages.everythingIsMissing)
    }

    if (!languageOfTheBook) {
      return message.reply(errorMessages.language);
    }
    if (!categorySelected) {
      return message.reply(errorMessages.category);
    }
    if (!titleOfTheBook) {
      return message.reply(errorMessages.title);
    }
    if (!book?.attachment || !book?.name) {
      return message.reply(errorMessages.file);
    }

    try {
      await downloadFile(
        book.url,
        book.name.replace(/\s/g, "_").replace("-", "")
      );

      const embed = new Embed({
        title: 'Enviado com sucesso!',
        subject: '📦 Upload',
        thumbnailUrl: 'https://c.tenor.com/t9Lbd0mHAUsAAAAd/nezuko-demon-slayer.gif',
        description: `**💾 Título**: ${titleOfTheBook}

        **✏️ Idioma**: ${languageOfTheBook.flag} ${languageOfTheBook.name}
    
        **👋 Membro**: ${message.author}
    
        **☑️ Categoria**: ${categorySelected}`,
        bannerUrl: 'https://c.tenor.com/xBh07rz9GHYAAAAC/nezuko-kamado-nezuko.gif'
      })

      message.reply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
    }
  },
};
