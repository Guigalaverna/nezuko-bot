import { LoggerAdapter } from "../@types/adapters/LoggerAdapter";
import { BotAdapter } from "../@types/adapters/BotAdapter";

export class Orchestrator {
  constructor(
    private botAdapter: BotAdapter,
    private loggerAdapter: LoggerAdapter
  ) {
    this.botAdapter = botAdapter;
    this.loggerAdapter = loggerAdapter;
  }

  public async start() {
    const { loggerAdapter, botAdapter } = this;
    console.log("");

    async function startBotAdapter() {
      await botAdapter.connect();
      loggerAdapter.print("[Bot Adapter] Started.", "bold", "green");
    }

    loggerAdapter.print("[Orchestrator] Starting adapters.", "bold", "green");
    await startBotAdapter();
  }
}
