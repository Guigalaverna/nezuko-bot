import { Client, Message, MessageAttachment, MessageEmbed } from "discord.js";

import * as fs from "fs";
import path from "path";
import { embed } from "../embeds/pesquisar";

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
