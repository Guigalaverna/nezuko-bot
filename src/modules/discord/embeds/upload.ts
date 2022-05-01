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
      url: "https://i.redd.it/s6xhbtw4kd881.gif",
    },
    description: `**💾 Título**: ${titleOfTheBook}

    **✏️ Idioma**: ${languageOfTheBook[0].flag} ${languageOfTheBook[0].name}

    **👋 Membro**: ${authorOfThePost}

    **☑️ Categoria**: ${categorySelected}`,
    color: "#D98BBD",
    image: {
      url: "https://pa1.narvii.com/7666/99b242f85f5d07a5c797618664b53d79db5e5986r1-512-288_hq.gif",
    },
    footer: {
      text: "Assinado por mim ❤️",
    },
  });
}
