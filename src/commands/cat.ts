import App from "../app.js"
import { createReadStream } from "fs";

export const cat = async (pathFile: string) => {
  try {
    const read = createReadStream(pathFile);
    read.pipe(process.stdout);
  } catch {
    App.getMessage.failed();
  }
}