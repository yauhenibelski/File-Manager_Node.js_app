import { homedir } from "os";
import { createInterface } from "readline/promises";
import { fileURLToPath } from "url";
import { exit } from "./commands/exit.js";
import { getName } from "./utils/getName.js";
import { getCommand } from "./utils/getCommand.js";

const __filename = fileURLToPath(import.meta.url);

class App {
  private readline = createInterface(process.stdin);

  static userName = getName();

  static dir = {
    home: homedir(),
    current: __filename,
  }
  static getMessage = {
    currentPath: async () => process.stdout.write(`You are currently in ${App.dir.current}\n`),
    invalidInput: async () => process.stdout.write(`Invalid input\n`),
    failed: async () => process.stdout.write(`Operation failed\n`),
    sayBuy: async () => process.stdout.write(`Thank you for using File Manager, ${App.userName}, goodbye!`),
    sayWelcome: async () => process.stdout.write(`Welcome to the File Manager, ${App.userName}!\n\n`),
  }

  async run() {
    await App.getMessage.sayWelcome();
    await App.getMessage.currentPath();

    this.readline.on('line', async (input) => {
      await getCommand(input);
      App.getMessage.currentPath();
    })
    process.on('SIGINT', exit);
  }
};

export default App