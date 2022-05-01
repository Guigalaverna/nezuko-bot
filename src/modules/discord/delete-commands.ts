import * as fs from "fs";
import * as path from "path";

import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { config } from "dotenv";

config({
  path: path.join(__dirname, "..", "..", "..", ".env.local"),
});

const token = process.env.DISCORD_TOKEN!;
const clientId = process.env.DISCORD_CLIENT_ID!;
const guildId = process.env.DISCORD_GUILD_ID!;

const commands = [];
const commandFiles = fs
  .readdirSync(path.join(__dirname, "commands"))
  .filter(command => command.endsWith(".ts"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`).default;

  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "9" }).setToken(token);

rest.get(Routes.applicationGuildCommands(clientId, guildId)).then(data => {
  const promises = [];
  // @ts-expect-error
  for (const command of data) {
    const deleteUrl = `${Routes.applicationGuildCommands(clientId, guildId)}/${
      command.id
    }`;
    promises.push(rest.delete(`/${deleteUrl}`));
  }
  return Promise.all(promises);
});
