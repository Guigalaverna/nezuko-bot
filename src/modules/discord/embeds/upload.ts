import { MessageEmbed, User } from "discord.js";

interface Props {
  titleOfTheBook: string;
  languageOfTheBook: {
    name: string;
    flag: string;
  }[];
  categorySelected: string;
  authorOfThePost: User;
}

export function createEmbed({
  authorOfThePost,
  categorySelected,
  languageOfTheBook,
  titleOfTheBook,
}: Props) {
  return new MessageEmbed({
    author: {
      name: "✅ Upload concluído",
    },
    thumbnail: {
      url: "https://c.tenor.com/t9Lbd0mHAUsAAAAd/nezuko-demon-slayer.gif",
    },
    description: `**💾 Título**: ${titleOfTheBook}

    **✏️ Idioma**: ${languageOfTheBook[0].flag} ${languageOfTheBook[0].name}

    **👋 Membro**: ${authorOfThePost}

    **☑️ Categoria**: ${categorySelected}`,
    color: "#D98BBD",
    image: {
      url: "https://c.tenor.com/xBh07rz9GHYAAAAC/nezuko-kamado-nezuko.gif",
    },
    footer: {
      text: "Assinado por mim ❤️",
    },
  });
}
