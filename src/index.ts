import { Discord } from "@modules/discord";
import { config } from "dotenv";
import path from "path";

config({
  path: path.join(__dirname, "..", ".env.local"),
});

// Orchestrator
function main() {
  // TODO: initialize discord bot
  // TODO: initialize google drive client

  Discord.init();
}

main();
