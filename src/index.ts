import { LoggerAdapter } from "./adapters/LoggerAdapter";
import { Orchestrator } from "./Orchestrator";

function main() {
  const loggerAdapter = new LoggerAdapter();
  // const botAdapter = new BotAdapter();

  const orchestrator = new Orchestrator(loggerAdapter);
  orchestrator.start();
}

main();
