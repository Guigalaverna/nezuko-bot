import "discord.js";

declare module "discord.js" {
  interface Client {
    commands: Collection<string, Command>;
  }
}
