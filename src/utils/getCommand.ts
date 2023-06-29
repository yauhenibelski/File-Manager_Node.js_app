import App from "../app.js";
import { commands } from "../commands/commands.js";

export const getCommand = async (input: string) => {
  const [command] = input.split(' ');
  const value = input.split(' ').slice(1).join(' ');

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