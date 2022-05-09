import { DatabaseAdapter } from "../../../../@types/adapters/DatabaseAdapter";
import { Client, Message } from "discord.js";
import { Embed } from "../lib/createEmbed";

export default {
  async execute(
    client: Client<boolean>,
    message: Message<boolean>,
    args: string[],
    databaseAdapter: DatabaseAdapter
  ) {
    switch (args[0]) {
      case "pesquisar":
        try {
          const searchedCategory = await databaseAdapter.findCategoryByName(
            args[1]
          );
          const searchedCategoryEmbed = new Embed({
            title: "Categoria Encontrada",
            subject: "🔎 Busca",
            thumbnailUrl:
              "https://c.tenor.com/t9Lbd0mHAUsAAAAd/nezuko-demon-slayer.gif",
            description: `A categoria **${searchedCategory.name}** foi encontrada!`,
            bannerUrl:
              "https://pa1.narvii.com/7666/99b242f85f5d07a5c797618664b53d79db5e5986r1-512-288_hq.gif",
          });
          return message.reply({
            embeds: [searchedCategoryEmbed],
          });
        } catch {
          return message.reply("Categoria não encontrada");
        }

      case "criar":
        const createdCategory = await databaseAdapter.createCategory({
          name: args[1],
        });

        const createdCategoryEmbed = new Embed({
          title: "Categoria Criada",
          subject: "✅ Criar",
          thumbnailUrl:
            "https://c.tenor.com/t9Lbd0mHAUsAAAAd/nezuko-demon-slayer.gif",
          description: `**💾 Título**: ${createdCategory.name}

          **📚 Id**: ${createdCategory.id}`,
          bannerUrl:
            "https://pa1.narvii.com/7666/99b242f85f5d07a5c797618664b53d79db5e5986r1-512-288_hq.gif",
        });

        return message.reply({
          embeds: [createdCategoryEmbed],
        });
    }
  },
};
