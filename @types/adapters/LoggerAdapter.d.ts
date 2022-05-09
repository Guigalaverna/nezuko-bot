export interface LoggerAdapter {
  print(message: string, weight?: string, color?: string): void;
}
