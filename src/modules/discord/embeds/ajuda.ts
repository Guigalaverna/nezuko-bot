import { MessageEmbed } from "discord.js";

export const embed = new MessageEmbed({
  title: "Comandos",
  author: {
    name: "😕 Ajudinha",
  },
  thumbnail: {
    url: "https://c.tenor.com/t9Lbd0mHAUsAAAAd/nezuko-demon-slayer.gif",
  },
  description: `Tá perdido? Eu vou te ajudar!
  
  Todos os comandos sempre deve começar com n! e deve estar em minúsculo <3.

  **Comandos**:
  **n!ajuda**: Mostra essa mensagem linda.
  **n!upload <idioma> <categoria> <nome do livro>**: Caso queria enviar um livro para a biblioteca.
  **n!pesquisar <termo de pesquisa>**: Pesquisar algum material da biblioteca.
  
  Acho que isso ajuda né?`,
  color: "#D98BBD",
  image: {
    url: "https://pa1.narvii.com/7666/99b242f85f5d07a5c797618664b53d79db5e5986r1-512-288_hq.gif",
  },
  footer: {
    text: "Assinado por mim ❤️",
  },
});
