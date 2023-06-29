import { writeFile } from "fs/promises";
import path from "path";
import App from "../app.js";

export const add = (fileName: string) => {
  try {
    writeFile(
      path.join(App.dir.current, fileName),
      '',
      { flag: 'ax' });
  } catch {
    App.getMessage.failed();
  }
}