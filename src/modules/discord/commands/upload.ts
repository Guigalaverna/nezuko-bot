import { Client, Message, MessageEmbed } from "discord.js";

import languages from "@configurations/languages.json";
import { downloadFile } from "src/utils/downloadFile";
import path from "path";

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
      const embed = new MessageEmbed({
        author: {
          name: "✅ Upload concluído",
        },
        thumbnail: {
          url: "https://i.redd.it/s6xhbtw4kd881.gif",
        },
        description: `**💾 Título**: ${titleOfTheBook}
  
        **✏️ Idioma**: ${languageOfTheBook[0].flag} ${languageOfTheBook[0].name}
  
        **👋 Membro**: ${message.author}
  
        **☑️ Categoria**: ${categorySelected}`,
        color: "#D98BBD",
        image: {
          url: "https://pa1.narvii.com/7666/99b242f85f5d07a5c797618664b53d79db5e5986r1-512-288_hq.gif",
        },
        footer: {
          text: "Assinado por mim ❤️",
        },
      });

      message.reply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
    }
  },
};
