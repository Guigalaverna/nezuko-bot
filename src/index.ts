import { DiscordAdapter } from "./adapters/DiscordAdapter";
import { ChalkAdapter } from "./adapters/ChalkAdapter";

import { Orchestrator } from "./Orchestrator";

function main() {
  const chalkAdapter = new ChalkAdapter();
  const discordAdapter = new DiscordAdapter();

  const orchestrator = new Orchestrator(discordAdapter, chalkAdapter);
  orchestrator.start();
}

main();
