import { MessageEmbed } from "discord.js"

interface EmbedProps {
  title: string
  subject: string
  thumbnailUrl?: string
  description: string
  bannerUrl?: string

}

export class Embed {
  constructor({ title, subject, thumbnailUrl, description, bannerUrl }: EmbedProps) {
    return new MessageEmbed({
      title,
      author: {
        name: subject,
      },
      description,
      thumbnail: {
        url: thumbnailUrl ? thumbnailUrl : '',
      },
      image: {
        url: bannerUrl ? bannerUrl : '',
      },
      color: '#D98BBD',
      footer: {
        text: 'Por Nezuko ❤️',
      },
      timestamp: new Date(),
    })
  }
}