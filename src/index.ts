import { Discord } from "@modules/discord";
import { config } from "dotenv";
import path from "path";
import { Modules } from "./modules";

config({
  path: path.join(__dirname, "..", ".env.local"),
});

// Orchestrator
function main() {
  const modules = new Modules();

  modules.discord.init();
}

main();
