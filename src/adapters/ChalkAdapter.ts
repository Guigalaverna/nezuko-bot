import { LoggerAdapter } from "../../@types/adapters/LoggerAdapter";
import chalk from "chalk";

export class ChalkAdapter implements LoggerAdapter {
  print(message: string, weight?: string, color?: string): void {
    if (!color) {
      color = "white";
    }

    if (!weight) {
      weight = "normal";
    }

    // @ts-expect-error
    console.log(` ${chalk[color][weight](message)}`);
  }
}
