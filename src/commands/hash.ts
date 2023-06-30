import { readFile, stat } from "fs/promises";
import App from "../app.js"
import { createHash } from "crypto";

export const hash = async (path: string) => {
  try {
    if((await stat(path)).isFile()) {
      const buff = await readFile(path);
      const hash = createHash('sha256').update(buff).digest('hex');

      console.log(hash);
    } else {
      App.getMessage.invalidInput();
    }
  } catch {
    App.getMessage.invalidInput();
  }
}