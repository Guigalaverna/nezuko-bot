import { MessageEmbed } from "discord.js";

export const embed = new MessageEmbed({
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
