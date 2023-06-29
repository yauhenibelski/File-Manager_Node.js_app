import path from "path"
import App from "../app.js"
import { access } from "fs/promises";

export const cd = async (dirPath: string) => {
  const normalize = path.normalize(dirPath);

  try {
    await access(dirPath);
    App.dir.current = normalize;
  } catch {
    App.getMessage.failed();
  }
}

