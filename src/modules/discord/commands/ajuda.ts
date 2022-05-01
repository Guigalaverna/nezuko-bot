import { Client, CommandInteraction, Message, MessageEmbed } from "discord.js";

export default {
  async execute(
    client: Client<boolean>,
    message: Message<boolean>,
    args: string[]
  ) {
    const embed = new MessageEmbed({
      title: "Comandos",
      author: {
        name: "😕 Ajudinha",
      },
      thumbnail: {
        url: "https://c.tenor.com/c5EvySkw_BYAAAAC/nezuko-confused-kimetsu-no-yaiba.gif",
      },
      description: `Tá perdido? Eu vou te ajudar!\n\n**Comandos**:\n**/upload**: Caso queria enviar um material para a biblioteca.\n**/pesquisar**: Pesquisar algum material da biblioteca.\n**/ajuda**: Mostra essa mensagem linda.\n\nAcho que isso ajuda né?`,
      color: "#D98BBD",
      image: {
        url: "https://pa1.narvii.com/7666/99b242f85f5d07a5c797618664b53d79db5e5986r1-512-288_hq.gif",
      },
      footer: {
        text: "Assinado por mim ❤️",
      },
    });

    message.reply({ embeds: [embed] });
  },
};
