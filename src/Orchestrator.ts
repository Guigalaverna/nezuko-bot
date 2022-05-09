import { LoggerAdapter } from "../@types/adapters/LoggerAdapter";
import { BotAdapter } from "../@types/adapters/BotAdapter";

import chalk from "chalk";

export class Orchestrator {
  constructor(
    // private botAdapter: BotAdapter,
    private loggerAdapter: LoggerAdapter
  ) {
    // this.botAdapter = botAdapter;
    this.loggerAdapter = loggerAdapter;
  }

  public async start() {
    const { loggerAdapter } = this;

    async function startBotAdapter() {
      // await botAdapter.connect();
      loggerAdapter.print("[Bot Adapter] Started.", "bold", "green");
    }

    loggerAdapter.print("[Orchestrator] Starting adapters.", "bold", "red");
    await startBotAdapter();
  }
}
