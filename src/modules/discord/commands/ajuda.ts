import { Client, CommandInteraction, Message, MessageEmbed } from "discord.js";
import { embed } from "../embeds/ajuda";

export default {
  async execute(
    client: Client<boolean>,
    message: Message<boolean>,
    args: string[]
  ) {
    message.reply({ embeds: [embed] });
  },
};
