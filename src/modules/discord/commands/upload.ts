import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("upload")
    .setDescription("Envia um livro para a biblioteca.")
    .addStringOption(option => {
      return option
        .setName("nome")
        .setDescription("Nome do livro")
        .setRequired(true);
    })
    .addStringOption(option => {
      return option.setName("autor").setDescription("Autor do livro");
    })
    .addStringOption(option => {
      return option
        .setName("categoria")
        .setDescription("Categoria que o livro se encaixa")
        .addChoices({
          name: "JavaScript",
          value: "javascript",
        })
        .addChoices({
          name: "Java",
          value: "java",
        })
        .addChoices({
          name: "C#",
          value: "csharp",
        })
        .addChoices({
          name: "C++",
          value: "cpp",
        })
        .addChoices({
          name: "PHP",
          value: "php",
        });
    })
    .addStringOption(option => {
      return option.setName("url").setDescription("Link do PDF");
    }),
  async execute(int: CommandInteraction) {
    const nome = int.options.getString("nome");
    const autor = int.options.getString("autor");
    const categoria = int.options.getString("categoria");
    const url = int.options.getString("url");

    int.reply(`${nome} - ${autor} - ${categoria} - ${url}`);
  },
};
