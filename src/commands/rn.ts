import { rename } from "fs/promises";
import App from "../app.js";
import path from "path";

export const rn = async (value: string) => {
  try {
    const [pathFile, newFileName] = value.split(' ');
    const newPath = pathFile.split(path.sep);
    newPath.pop();

    await rename(
      pathFile,
      path.join(path.sep, ...newPath, newFileName)
    );
  } catch {
    App.getMessage.failed();
  }
}