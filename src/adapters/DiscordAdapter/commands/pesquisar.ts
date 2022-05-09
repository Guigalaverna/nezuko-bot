import { Client, Message, MessageAttachment } from "discord.js";

import * as fs from "fs";
import path from "path";
import { Embed } from "../lib/createEmbed";

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

    const filename = listOfAllBooksAvailable.find(file =>
      file.includes(searchTerm.replace(" ", "_"))
    )!;

    const embed = new Embed({
      title: "Livro Encontrado",
      subject: "🔎 Busca",
      thumbnailUrl:
        "https://c.tenor.com/t9Lbd0mHAUsAAAAd/nezuko-demon-slayer.gif",
      description: `O livro foi encontrado!`,
      bannerUrl:
        "https://pa1.narvii.com/7666/99b242f85f5d07a5c797618664b53d79db5e5986r1-512-288_hq.gif",
    });

    try {
      const file = fs.readFileSync(
        path.join(__dirname, "..", "..", "..", "..", "downloads", filename)
      );

      const attachment = new MessageAttachment(file, filename);

      message.reply({
        embeds: [embed],
      });
      message.channel.send({
        files: [attachment],
      });
    } catch (error) {
      message.reply("Não encontrei nenhum livro com esse nome 😭");
    }
  },
};
