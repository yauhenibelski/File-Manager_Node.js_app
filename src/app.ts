import { homedir } from "os";
import path from "path";
import { createInterface } from "readline/promises";
import { fileURLToPath } from "url";
import { exit } from "./commands/exit.js";

// const __filename = fileURLToPath(import.meta.url);

class App {
  static userName = '';

  dir = {
    home: homedir(),
    current: homedir(),
  }

  readline = createInterface(process.stdin);

  showCurrentPath() {
    process.stdout.write(`You are currently in ${this.dir.current}\n`);
  }

  sayWelcome() {
    const args = process.argv.slice(2);
    const prefix = '--username';
    const [,userName] = args.filter((arg) => arg.startsWith(prefix)).join().split('=');
    const content = `Welcome to the File Manager, ${userName}!\n\n`;
    App.userName = userName;

    process.stdout.write(content);
    this.showCurrentPath();
  }

  run() {
    this.sayWelcome();

    this.readline.on('line', (data) => {

      this.showCurrentPath();
      if(data === '.exit') exit();
    })
    process.on('SIGINT', exit)
  }
};
export default App