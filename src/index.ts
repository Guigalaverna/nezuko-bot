import { DiscordAdapter } from "./adapters/DiscordAdapter";
import { ChalkAdapter } from "./adapters/ChalkAdapter";

import { Orchestrator } from "./Orchestrator";
import { PrismaAdapter } from "./adapters/PrismaAdapter";

function main() {
  const prismaAdapter = new PrismaAdapter();
  const chalkAdapter = new ChalkAdapter();
  const discordAdapter = new DiscordAdapter(prismaAdapter);

  const orchestrator = new Orchestrator(discordAdapter, chalkAdapter);
  orchestrator.start();
}

main();
