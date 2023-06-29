import path from "path"
import App from "../app.js"
import { readdir } from "fs/promises";

export const cd = async (dirPath: string) => {
  const normalize = path.normalize(dirPath);
  try {
    await readdir(normalize);

    App.dir.current = normalize;
  } catch {
    App.getMessage.failed();
  }
}
