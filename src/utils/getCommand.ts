import App from "../app.js";
import { commands } from "../commands/commands.js";

export const getCommand = async (input: string) => {
  const [command, value] = input.split(' ');

  if(input === '') {
    return App.getMessage.invalidInput();
  } else {
    try {
      await commands.get(command)(value);
    } catch {
      App.getMessage.invalidInput();
    }
  }
}