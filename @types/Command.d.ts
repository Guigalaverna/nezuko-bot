import { Interaction } from "discord.js";

export interface Command {
  execute(int: Interaction): Promise<void>;
}
