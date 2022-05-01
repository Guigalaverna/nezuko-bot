import { Client, Interaction, Message } from "discord.js";

export interface Command {
  execute(
    client: Client<boolean>,
    message: Message<boolean>,
    args: string[]
  ): Promise<void> | Promise<unknown>;
}
