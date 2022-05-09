import { Client, Interaction, Message } from "discord.js";
import { DatabaseAdapter } from "./adapters/DatabaseAdapter";

export interface Command {
  execute(
    client: Client<boolean>,
    message: Message<boolean>,
    args: string[],
    databaseAdapter: DatabaseAdapter
  ): Promise<void> | Promise<unknown>;
}
