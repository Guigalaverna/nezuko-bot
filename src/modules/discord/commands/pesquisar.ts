import { Client, Message, MessageAttachment, MessageEmbed } from "discord.js";

import * as fs from "fs";
import path from "path";

export default {
  async execute(
    client: Client<boolean>,
    message: Message<boolean>,
    args: string[]
  ) {
    const searchTerm = args.join(" ");
    const listOfAllBooksAvailable = fs
      .readdirSync(path.join(__dirname, "..", "..", "..", "..", "downloads"))
      .filter(file => file.endsWith(".pdf"));

    const file = fs.readFileSync(
      path.join(
        __dirname,
        "..",
        "..",
        "..",
        "..",
        "downloads",
        listOfAllBooksAvailable.find(file =>
          file.includes(searchTerm.replace(" ", "_"))
        )!
      )
    );

    if (!file) {
      message.reply("Não encontrei nenhum livro com esse termo 😭");
      message.delete();
      return;
    }

    const embed = new MessageEmbed({
      title: "Livro Encontrado",
      author: {
        name: "🔎 Busca",
      },
      thumbnail: {
        url: "https://c.tenor.com/c5EvySkw_BYAAAAC/nezuko-confused-kimetsu-no-yaiba.gif",
      },
      description: `Encontrei este livro`,
      color: "#D98BBD",
      image: {
        url: "https://pa1.narvii.com/7666/99b242f85f5d07a5c797618664b53d79db5e5986r1-512-288_hq.gif",
      },
      footer: {
        text: "Assinado por mim ❤️",
      },
    });

    const attachment = new MessageAttachment(
      file,
      listOfAllBooksAvailable.find(file =>
        file.includes(searchTerm.replace(" ", "_"))
      )!
    );

    message.reply({
      embeds: [embed],
    });
    message.channel.send({
      files: [attachment],
    });
  },
};
